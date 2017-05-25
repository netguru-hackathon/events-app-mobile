import {
  EVENTS_FETCH_REQUEST,
  EVENTS_FETCH_SUCCESS,
  EVENTS_FETCH_FAILURE,
  EVENT_FETCH_REQUEST,
  EVENT_FETCH_SUCCESS,
  EVENT_FETCH_FAILURE,
  EVENT_PARTICIPANTS_FETCH_REQUEST,
  EVENT_PARTICIPANTS_FETCH_SUCCESS,
  EVENT_PARTICIPANTS_FETCH_FAILURE,
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

export function fetchEventParticipants(id) {
  return {
    types: [
      EVENT_PARTICIPANTS_FETCH_REQUEST,
      EVENT_PARTICIPANTS_FETCH_SUCCESS,
      EVENT_PARTICIPANTS_FETCH_FAILURE,
    ],
    payload: {
      request: {
        url: `/events/${id}/users`,
      },
    },
  };
}
