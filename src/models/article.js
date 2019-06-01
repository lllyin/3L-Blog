import { queryArticleDetail, queryArticles, postComment, likeComment } from '../services/article';
import { SUCCESS_STATUS } from '../constant/config';

export default {
  namespace: 'article',

  state: {
    params: {
      page: 1,
      pageSize: 10
    },
    list: [],
    detail: {},
    total: 0
  },

  effects: {
    *fetch({ loadingMore }, { call, put, select }) {
      const queryParams = yield select(({ article }) => article.params);

      if (loadingMore) {
        queryParams.page += 1;
        const response = yield call(queryArticles, queryParams);

        yield put({
          type: 'saveMore',
          payload: response.data,
          params: queryParams
        });
      } else {
        const params = {
          page: 1,
          pageSize: 10
        };
        const response = yield call(queryArticles, params);

        yield put({
          type: 'save',
          payload: response.data,
          params
        });
      }
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
        payload: response.data
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
        payload: response.data
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
        payload: { commentId }
      });
    }
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
        params: action.params
      };
    },
    saveMore(state, action) {
      return {
        ...state,
        list: [...state.list, ...action.payload],
        params: action.params
      };
    },
    saveDetail(state, aciton) {
      return {
        ...state,
        detail: aciton.payload
      };
    },
    saveComment(state, action) {
      return {
        ...state,
        detail: action.payload
      };
    },
    saveLikeComment(state, action) {
      const { commentId } = action.payload;
      const newComments = state.detail.comments.map(c => {
        if (c._id === commentId) {
          return {
            ...c,
            like: c.like + 1
          };
        }
        return c;
      });

      return {
        ...state,
        detail: {
          ...state.detail,
          comments: newComments
        }
      };
    }
  }
};
