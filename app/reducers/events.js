import {
  EVENTS_FETCH_REQUEST,
  EVENTS_FETCH_SUCCESS,
  EVENTS_FETCH_FAILURE,
} from '../constants/actionTypes';

export const initialState = {
  isStarted: false,
  isFetching: false,
  items: [],
};

export default function auth(state = initialState, action) {
  let items;
  switch (action.type) {
    case EVENTS_FETCH_REQUEST:
      return {
        ...state,
        isStarted: true,
        isFetching: true,
      };
    case EVENTS_FETCH_SUCCESS:
      items = action.payload;
      return {
        ...state,
        isFetching: false,
        items,
      };
    case EVENTS_FETCH_FAILURE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
