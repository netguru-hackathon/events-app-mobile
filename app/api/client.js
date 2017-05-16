import axios from 'axios';
import { baseURL } from '../constants/constants';

const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;

export const client = axios.create({
  baseURL,
  responseType: 'json',
});

export const clientOptions = {
  returnRejectedPromiseOnError: true,
  onSuccess: ({ action, next, response }) => {
    new JSONAPIDeserializer().deserialize(response.data)
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
};
