import { queryUser } from '../services/api';
import { SUCCESS_STATUS } from '../constant/config';

export default {
  namespace: 'user',

  state: {
    userInfo: {}
  },

  effects: {
    *fetchUser({ authorization, success, error }, { call, put }) {
      const response = yield call(queryUser, { authorization });

      if (response.status === 200 && response.code === SUCCESS_STATUS) {
        if (typeof success === 'function') success(response);
      } else if (typeof error === 'function') {
        error && error(response);
      }
      yield put({
        type: 'saveUser',
        payload: response.data
      });
    }
  },

  reducers: {
    saveUser(state, aciton) {
      return {
        ...state,
        userInfo: aciton.payload
      };
    }
  }
};
