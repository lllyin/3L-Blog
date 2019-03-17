import { queryArticleDetail, queryArticles, postComment, likeComment } from '../services/article';
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
      const response = yield call(queryArticles);

      if (response.status >> 0 === SUCCESS_STATUS) {
        if (typeof success === 'function') success(response);
      } else if (typeof error === 'function') {
        error(response);
      }
      yield put({
        type: 'save',
        payload: response.data,
      });
    },
    *fetchDetail({ articleId, success, error }, { call, put }) {
      const response = yield call(queryArticleDetail, { articleId });

      if (response.status >> 0 === SUCCESS_STATUS) {
        if (typeof success === 'function') success(response);
      } else if (typeof error === 'function') {
        error(response);
      }
      yield put({
        type: 'saveDetail',
        payload: response.data,
      });
    },
    *addComment({ postId, data, success, error }, { call, put }) {
      const response = yield call(postComment, { postId, data });

      if (response.status >> 0 === SUCCESS_STATUS) {
        if (typeof success === 'function') success(response);
      } else if (typeof error === 'function') {
        error(response);
      }
      yield put({
        type: 'saveComment',
        payload: response.data,
      });
    },
    *likeAComment({ commentId, success, error }, { call, put }) {
      const response = yield call(likeComment, { commentId });

      if (response.status >> 0 === SUCCESS_STATUS) {
        if (typeof success === 'function') success(response);
      } else if (typeof error === 'function') {
        error(response);
      }
      yield put({
        type: 'saveLikeComment',
        payload: { commentId },
      });
    },
  },

  reducers: {
    save(state, aciton) {
      return {
        ...state,
        list: aciton.payload,
      };
    },
    saveDetail(state, aciton) {
      return {
        ...state,
        detail: aciton.payload,
      };
    },
    saveComment(state, action) {
      return {
        ...state,
        detail: action.payload,
      };
    },
    saveLikeComment(state, action) {
      const { commentId } = action.payload;
      const newComments = state.detail.comments.map((c) => {
        if (c._id === commentId) {
          console.log(c);
          return {
            ...c,
            like: c.like + 1,
          };
        }
        return c;
      });

      return {
        ...state,
        detail: {
          ...state.detail,
          comments: newComments,
        },
      };
    },
  },
};
