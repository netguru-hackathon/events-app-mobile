import { combineReducers } from 'redux';
import auth from './auth';
import event from './event';
import eventParticipants from './eventParticipants';
import events from './events';
import user from './user';

export default combineReducers({
  auth,
  event,
  eventParticipants,
  events,
  user,
});
