import { queryArticleDetail, queryArticles } from '../services/article';
import { SUCCESS_STATUS } from '../constant/config';


export default {
  namespace: 'article',

  state: {
    list: [],
    detail: {},
    total: 0,
  },

  effects: {
    *fetch({ success, error }, { call, put }) {
      const response = yield queryArticles();
      if (response.status >> 0 === SUCCESS_STATUS) {
        if (typeof success === 'function') success(response);
      } else if (typeof error === 'function') { error(response); }
      yield put({
        type: 'save',
        payload: response.data,
      });
    },
    *fetchDetail({ articleId, success, error }, { call, put }) {
      const response = yield queryArticleDetail({ articleId });
      if (response.status >> 0 === SUCCESS_STATUS) {
        if (typeof success === 'function') success(response);
      } else if (typeof error === 'function') { error(response); }
      yield put({
        type: 'saveDetail',
        payload: response.data,
      });
    },
  },

  reducers: {
    save(state, aciton) {
      return {
        ...state,
        list: aciton.payload,
      }
    },
    saveDetail(state, aciton) {
      return {
        ...state,
        detail: aciton.payload,
      }
    },
  },
}