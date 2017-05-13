import {
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
} from '../constants/actionTypes';

export const initialState = {
  isStarted: false,
  isFetching: false,
  errors: [],
  isAuthenticated: false,
  item: {},
};

export default function auth(state = initialState, action) {
  let item;
  let errors;
  switch (action.type) {
    case AUTH_USER_REQUEST:
      return {
        ...state,
        isStarted: true,
        isFetching: true,
        isOauth: action.isOauth,
      };
    case AUTH_USER_SUCCESS:
      item = action.payload.data;
      return {
        ...state,
        errors: [],
        isFetching: false,
        isAuthenticated: true,
        item,
      };
    case AUTH_USER_FAILURE:
      errors = action.error.response.data.errors;
      return {
        ...initialState,
        errors: [errors],
      };
    default:
      return state;
  }
}
