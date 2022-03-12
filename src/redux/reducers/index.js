import { combineReducers } from 'redux';
import { eventReducer } from './eventsReducer';

const allReducers = combineReducers({
	eventsreducer2: eventReducer,
});

export default allReducers;
