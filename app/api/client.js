import axios from 'axios';
import update from 'immutability-helper';
import { baseURL } from '../constants/constants';

const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;

export const client = axios.create({
  baseURL,
  responseType: 'json',
});

const opts = {
  keyForAttribute: 'camelCase',
};

export const clientOptions = {
  returnRejectedPromiseOnError: true,
  onSuccess: ({ action, next, response }) => {
    new JSONAPIDeserializer(opts).deserialize(response.data)
      .then((data) => {
        const nextAction = {
          type: action.types[1],
          payload: data,
          meta: {
            previousAction: action,
          },
        };
        next(nextAction);
        return nextAction;
      });
  },
  interceptors: {
    request: [
      // eslint-disable-next-line
      function ({ getState, dispatch, getSourceAction }, req) {
        if (!getState().auth.item.token) return req;
        return update(req, {
          $merge: {
            headers: {
              authorization: `Bearer ${getState().auth.item.token}`,
            },
          },
        });
      },
    ],
  },
};
