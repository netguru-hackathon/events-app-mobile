import {
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
  AUTH_SET_PLAYER_ID,
  LOGOUT_USER_SUCCESS,
} from '../constants/actionTypes';

export function authUser(code) {
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

export function setPlayerId(playerId) {
  return {
    type: AUTH_SET_PLAYER_ID,
    playerId,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER_SUCCESS,
  };
}
