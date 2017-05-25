import {
  EVENT_PARTICIPANTS_FETCH_REQUEST,
  EVENT_PARTICIPANTS_FETCH_SUCCESS,
  EVENT_PARTICIPANTS_FETCH_FAILURE,
} from '../constants/actionTypes';

export const initialState = {
  isStarted: false,
  isFetching: false,
  items: [],
};

export default function eventParticipants(state = initialState, action) {
  let items;
  switch (action.type) {
    case EVENT_PARTICIPANTS_FETCH_REQUEST:
      return {
        ...state,
        isStarted: true,
        isFetching: true,
      };
    case EVENT_PARTICIPANTS_FETCH_SUCCESS:
      items = action.payload;
      return {
        ...state,
        isFetching: false,
        items,
      };
    case EVENT_PARTICIPANTS_FETCH_FAILURE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
