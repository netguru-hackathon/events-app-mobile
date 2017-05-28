import {
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
  AUTH_SET_PLAYER_ID,
  LOGOUT_USER_SUCCESS,
} from '../constants/actionTypes';

export const initialState = {
  isStarted: false,
  isFetching: false,
  errors: [],
  isAuthenticated: false,
  item: {},
  playerId: undefined,
};

export default function auth(state = initialState, action) {
  let item;
  let errors;
  let playerId;
  switch (action.type) {
    case AUTH_USER_REQUEST:
      return {
        ...state,
        isStarted: true,
        isFetching: true,
      };
    case AUTH_USER_SUCCESS:
      item = action.payload;
      return {
        ...state,
        errors: [],
        isFetching: false,
        isAuthenticated: true,
        item,
      };
    case AUTH_USER_FAILURE:
      errors = action.error.response;
      return {
        ...initialState,
        errors: [errors],
      };
    case AUTH_SET_PLAYER_ID:
      playerId = action.playerId;
      return {
        ...state,
        playerId,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
