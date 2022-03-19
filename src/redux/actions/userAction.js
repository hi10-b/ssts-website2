import axios from 'axios';
import { baseURL } from '../../variables';
import { UserActionTypes } from '../constants/actionTypes';

export function getUser(userEmail) {
	sessionStorage.setItem('curUser', false);
	console.log('useremail ' + userEmail);
	return function (dispatch) {
		return axios
			.post(`${baseURL}/user`, { email: userEmail })
			.then((res) => {
				dispatch({ type: UserActionTypes.SET_USER, user: res.data });
				console.log('res' + res.data);
				sessionStorage.setItem('curUser', true);
			})
			.catch((err) => {
				console.log('error when fetching ' + err);
				sessionStorage.setItem('curUser', false);
			});
	};
}
