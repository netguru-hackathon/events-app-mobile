import {
  EVENTS_FETCH_REQUEST,
  EVENTS_FETCH_SUCCESS,
  EVENTS_FETCH_FAILURE,
} from '../constants/actionTypes';

export function fetchEvents() {
  return {
    types: [
      EVENTS_FETCH_REQUEST,
      EVENTS_FETCH_SUCCESS,
      EVENTS_FETCH_FAILURE,
    ],
    payload: {
      request: {
        url: '/events',
      },
    },
  };
}
