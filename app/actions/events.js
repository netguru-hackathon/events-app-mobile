import {
  EVENTS_FETCH_REQUEST,
  EVENTS_FETCH_SUCCESS,
  EVENTS_FETCH_FAILURE,
  EVENT_FETCH_REQUEST,
  EVENT_FETCH_SUCCESS,
  EVENT_FETCH_FAILURE,
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

export function fetchEvent(id) {
  return {
    types: [
      EVENT_FETCH_REQUEST,
      EVENT_FETCH_SUCCESS,
      EVENT_FETCH_FAILURE,
    ],
    payload: {
      request: {
        url: `/events/${id}`,
      },
    },
  };
}
