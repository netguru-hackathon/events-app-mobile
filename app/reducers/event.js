import {
  EVENT_FETCH_REQUEST,
  EVENT_FETCH_SUCCESS,
  EVENT_FETCH_FAILURE,
} from '../constants/actionTypes';

export const initialState = {
  isStarted: false,
  isFetching: false,
  item: {},
  included: {},
};

export default function auth(state = initialState, action) {
  let item;
  switch (action.type) {
    case EVENT_FETCH_REQUEST:
      return {
        ...state,
        isStarted: true,
        isFetching: true,
      };
    case EVENT_FETCH_SUCCESS:
      item = action.payload.data.data.attributes;
      return {
        ...state,
        isFetching: false,
        item,
      };
    case EVENT_FETCH_FAILURE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
