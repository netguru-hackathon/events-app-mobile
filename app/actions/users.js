import {
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE,
} from '../constants/actionTypes';

export function fetchUser(id) {
  return {
    types: [
      USER_FETCH_REQUEST,
      USER_FETCH_SUCCESS,
      USER_FETCH_FAILURE,
    ],
    payload: {
      request: {
        url: `/users/${id}`,
      },
    },
  };
}
