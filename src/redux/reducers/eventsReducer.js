import { ActionTypes } from '../constants/actionTypes';

const initState = {
	allEvents: [],
	todayEvents: [],
};

export const eventReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.SET_EVENTS:
			return {
				...state,
				allEvents: action.events,
			};
		case ActionTypes.SET_TODAY_EVENTS:
			return {
				...state,
				todayEvents: action.todayEvents,
			};
		default:
			return state;
	}
};
