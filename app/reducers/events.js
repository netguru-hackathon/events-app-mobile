import { unionWith, prop, eqBy } from 'ramda';
import {
  EVENTS_FETCH_REQUEST,
  EVENTS_FETCH_SUCCESS,
  EVENTS_FETCH_FAILURE,
  EVENTS_REFRESH_REQUEST,
  EVENTS_REFRESH_SUCCESS,
} from '../constants/actionTypes';

const comparator = eqBy(prop('id'));

export const initialState = {
  isStarted: false,
  isFetching: false,
  isRefreshing: false,
  items: [],
  links: [],
};

export default function events(state = initialState, action) {
  let items;
  let links;
  switch (action.type) {
    case EVENTS_FETCH_REQUEST:
      return {
        ...state,
        isStarted: true,
        isFetching: true,
      };
    case EVENTS_FETCH_SUCCESS:
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
    case EVENTS_FETCH_FAILURE:
      return {
        ...initialState,
      };
    case EVENTS_REFRESH_REQUEST:
      return {
        ...state,
        isRefreshing: true,
      };
    case EVENTS_REFRESH_SUCCESS:
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
