import { unionWith, prop, eqBy } from 'ramda';
import {
  EVENT_PARTICIPANTS_INITIALIZE,
  EVENT_PARTICIPANTS_FETCH_REQUEST,
  EVENT_PARTICIPANTS_FETCH_SUCCESS,
  EVENT_PARTICIPANTS_FETCH_FAILURE,
  EVENT_PARTICIPANTS_REFRESH_REQUEST,
  EVENT_PARTICIPANTS_REFRESH_SUCCESS,
} from '../constants/actionTypes';

const comparator = eqBy(prop('id'));

export const initialState = {
  isStarted: false,
  isFetching: false,
  isRefreshing: false,
  items: [],
  links: [],
};

export default function eventParticipants(state = initialState, action) {
  let items;
  let links;
  switch (action.type) {
    case EVENT_PARTICIPANTS_INITIALIZE:
      return {
        ...initialState,
      };
    case EVENT_PARTICIPANTS_FETCH_REQUEST:
      return {
        ...state,
        isStarted: true,
        isFetching: true,
      };
    case EVENT_PARTICIPANTS_FETCH_SUCCESS:
      items = action.payload;
      links = action.links;
      return {
        ...state,
        isFetching: false,
        items: unionWith(
          comparator,
          state.items,
          items,
        ),
        links,
      };
    case EVENT_PARTICIPANTS_FETCH_FAILURE:
      return {
        ...initialState,
      };
    case EVENT_PARTICIPANTS_REFRESH_REQUEST:
      return {
        ...state,
        isRefreshing: true,
      };
    case EVENT_PARTICIPANTS_REFRESH_SUCCESS:
      items = action.payload;
      links = action.links;
      return {
        ...state,
        isRefreshing: false,
        items,
        links,
      };
    default:
      return state;
  }
}
