import {
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
} from '../constants/actionTypes';

export default function authUser(code) {
  return {
    types: [
      AUTH_USER_REQUEST,
      AUTH_USER_SUCCESS,
      AUTH_USER_FAILURE,
    ],
    payload: {
      request: {
        method: 'post',
        url: '/session',
        data: {
          code,
        },
        simple: false,
      },
    },
  };
}
