import { EventActionTypes } from '../constants/actionTypes';

const initState = {
	allEvents: [],
	todayEvents: [],
};

export const eventReducer = (state = initState, action) => {
	switch (action.type) {
		case EventActionTypes.SET_EVENTS:
			return {
				...state,
				allEvents: action.events,
			};
		case EventActionTypes.SET_TODAY_EVENTS:
			return {
				...state,
				todayEvents: action.todayEvents,
			};
		default:
			return state;
	}
};
