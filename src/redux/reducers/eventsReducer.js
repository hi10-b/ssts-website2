import { ActionTypes } from '../constants/actionTypes';

const initState = {
	allEvents: [],
};

export const eventReducer = (state = initState, { type, payload }) => {
	console.log(type);
	switch (type) {
		case ActionTypes.SET_EVENTS:
			return {
				allEvents: payload,
			};
		default:
			return state;
	}
};
