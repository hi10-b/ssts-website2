import axios from 'axios';
import { useDispatch } from 'react-redux';
import { baseURL } from '../../variables';
import { EventActionTypes } from '../constants/actionTypes';

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

export function fetchEvents() {
	return function (dispatch) {
		return axios
			.get(`${baseURL}`)
			.then((res) => {
				console.log(res);
				dispatch({ type: EventActionTypes.SET_EVENTS, events: res.data });
			})
			.catch((err) => {
				console.log('error when fetching ' + err);
			});
	};
}
export const fetchTodayEvents = () => {
	console.log('here');
	return async (dispatch) => {
		return await axios
			.get(`${baseURL}/today`)
			.then((res) => {
				console.log(res);
				dispatch({ type: EventActionTypes.SET_TODAY_EVENTS, todayEvents: res.data });
			})
			.catch((err) => {
				console.log('error when fetching ' + err);
			});
	};
};

// export const fetchEvents = () => async (dispatch) => {
// 	const res = await axios.get('http://localhost:5000/').then((res) => dispatch({ type: EventActionTypes.SET_EVENTS, payload: res.data }));
// 	console.log('res' + res);
// 	try {
// 	} catch (err) {
// 		console.log('error when fetching ' + err);
// 	}
// };

function setEvents(data) {
	return {
		type: EventActionTypes.SET_EVENTS,
		payload: data,
	};
}
