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
// 				dispatch(setEvents(res));
// 				console.log(`res ${res}`);
// 			})
// 			.catch((err) => {
// 				console.log('error when fetching ' + err);
// 			});
// 	};
// }

export const fetchEvents = () => async (dispatch) => {
	try {
		const res = axios.get('http://localhost:5000');
		console.log(res);
		dispatch({ type: ActionTypes.SET_EVENTS, payload: res.data });
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
