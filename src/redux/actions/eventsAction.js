import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../constants/actionTypes';

// export function fetchEvents() {
// 	return function (dispatch) {
// 		return axios
// 			.get('http://localhost:5000')
// 			.then(({ data }) => {
// 				dispatch(setEvents(data));
// 			})
// 			.catch((err) => {
// 				console.log('error while fetching events ' + err);
// 			});
// 	};
// }

// export const setEvents = (events) => {
// 	console.log('events' + events);
// 	return {
// 		type: 'SET_EVENTS',
// 		payload: events,
// 	};
// };

// export function fetchEvents() {
// 	return function (dispatch) {
// 		return axios
// 			.get('http://localhost:5000')
// 			.then((res) => {
// 				console.log(res);
// 				dispatch({ type: ActionTypes.SET_EVENTS, events: res.data });
// 			})
// 			.catch((err) => {
// 				console.log('error when fetching ' + err);
// 			});
// 	};
// }
export function fetchTodayEvents() {
	console.log('here');
	return function (dispatch) {
		return axios
			.get('http://172.22.0.1:5000/today')
			.then((res) => {
				console.log(res);
				dispatch({ type: ActionTypes.SET_TODAY_EVENTS, todayEvents: res.data });
			})
			.catch((err) => {
				console.log('error when fetching ' + err);
			});
	};
}

export const fetchEvents = () => async (dispatch) => {
	const res = await axios.get('http://172.22.0.1:5000').then((res) => dispatch({ type: ActionTypes.SET_EVENTS, payload: res.data }));
	console.log('res' + res);
	try {
	} catch (err) {
		console.log('error when fetching ' + err);
	}
};

function setEvents(data) {
	return {
		type: ActionTypes.SET_EVENTS,
		payload: data,
	};
}
