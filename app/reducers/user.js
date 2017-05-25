import {
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE,
} from '../constants/actionTypes';

export const initialState = {
  isStarted: false,
  isFetching: false,
  item: {},
};

export default function user(state = initialState, action) {
  let item;
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return {
        ...state,
        isStarted: true,
        isFetching: true,
      };
    case USER_FETCH_SUCCESS:
      item = action.payload;
      return {
        ...state,
        isFetching: false,
        item,
      };
    case USER_FETCH_FAILURE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
