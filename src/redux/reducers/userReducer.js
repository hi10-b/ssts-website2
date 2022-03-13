import { UserActionTypes } from '../constants/actionTypes';

const initState = {
	user: [],
	userType: 'basic',
};

export const userReducer = (state = initState, action) => {
	switch (action.type) {
		case UserActionTypes.SET_USER:
			return {
				user: action.user,
			};
		// case UserActionTypes.SET_TODAY_EVENTS:
		// 	return {
		// 		...state,
		// 		todayEvents: action.todayEvents,
		// 	};
		default:
			return state;
	}
};
