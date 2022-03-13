import axios from 'axios';
import { baseURL } from '../../variables';
import { UserActionTypes } from '../constants/actionTypes';

export function getUser(userEmail) {
	console.log('useremail ' + userEmail);
	return function (dispatch) {
		return axios
			.post(`${baseURL}/user`, { email: userEmail })
			.then((res) => {
				console.log(res);
				dispatch({ type: UserActionTypes.SET_USER, user: res.data });
			})
			.catch((err) => {
				console.log('error when fetching ' + err);
			});
	};
}
