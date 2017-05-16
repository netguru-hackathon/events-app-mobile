import { combineReducers } from 'redux';
import auth from './auth';
import event from './event';
import events from './events';

export default combineReducers({
  auth,
  event,
  events,
});
