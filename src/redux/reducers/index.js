import { combineReducers } from 'redux';
import { eventReducer } from './eventsReducer';
import { userReducer } from './userReducer';

const allReducers = combineReducers({
	allEvents: eventReducer,
	userReducer: userReducer,
});

export default allReducers;
