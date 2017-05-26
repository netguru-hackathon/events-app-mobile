import {
  EVENTS_FETCH_REQUEST,
  EVENTS_FETCH_SUCCESS,
  EVENTS_FETCH_FAILURE,
  EVENTS_REFRESH_REQUEST,
  EVENTS_REFRESH_SUCCESS,
  EVENTS_REFRESH_FAILURE,
  EVENT_FETCH_REQUEST,
  EVENT_FETCH_SUCCESS,
  EVENT_FETCH_FAILURE,
  EVENT_PARTICIPANTS_FETCH_REQUEST,
  EVENT_PARTICIPANTS_FETCH_SUCCESS,
  EVENT_PARTICIPANTS_FETCH_FAILURE,
} from '../constants/actionTypes';

const defaultPer = 10;

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
        params: {
          'page[page]': 1,
          'page[page-size]': defaultPer,
        },
      },
    },
  };
}

export function refreshEvents() {
  return {
    types: [
      EVENTS_REFRESH_REQUEST,
      EVENTS_REFRESH_SUCCESS,
      EVENTS_REFRESH_FAILURE,
    ],
    payload: {
      request: {
        url: '/events',
        params: {
          'page[page]': 1,
          'page[page-size]': defaultPer,
        },
      },
    },
  };
}

export function fetchEventsNext() {
  return (dispatch, getState) => {
    const { events } = getState();
    const url = events.links.next;
    return dispatch({
      types: [
        EVENTS_FETCH_REQUEST,
        EVENTS_FETCH_SUCCESS,
        EVENTS_FETCH_FAILURE,
      ],
      payload: {
        request: {
          url,
        },
      },
    });
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
