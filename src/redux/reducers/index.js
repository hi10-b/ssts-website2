import { combineReducers } from 'redux';
import { eventReducer } from './eventsReducer';

const rootReducers = combineReducers({
	allEvents: eventReducer,
});

export default rootReducers;
