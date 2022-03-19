import { UserActionTypes } from '../constants/actionTypes';

const initState = {
	user: [],
	userType: 3,
};

export const userReducer = (state = initState, action) => {
	switch (action.type) {
		case UserActionTypes.SET_USER:
			return {
				...state,
				user: action.user,
				userType: action.user[0].userType,
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
