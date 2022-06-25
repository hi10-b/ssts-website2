import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, fetchTodayEvents } from '../redux/actions/eventsAction';
import Events from '../features/events';
import TopGrid from '../features/topGrid';
import { Container } from 'react-bootstrap';
import Banner from '../features/banner';
import { allEvents2 } from './allEvents';

const LandingPage = () => {
	// const allEvents = useSelector((state) => state.allEvents.allEvents);
	const allEvents = allEvents2;
	const todayEvents = useSelector((state) => state.allEvents.todayEvents);

	const dispatch = useDispatch();

	const loadEvents = useCallback(async () => {
		try {
			console.log('events ' + fetchEvents);
			await dispatch(fetchEvents());
		} catch (err) {
			console.log(err);
		}
	}, [dispatch]);

	const loadTodayEvents = useCallback(async () => {
		try {
			console.log('today events: ' + fetchTodayEvents);
			await dispatch(fetchTodayEvents());
		} catch (err) {
			console.log(err);
		}
	}, [dispatch]);
	console.log(todayEvents);

	useEffect(() => {
		loadEvents();
		console.log('rendered');
	}, [dispatch, loadEvents]);

	useEffect(() => {
		loadTodayEvents();
		console.log('rendered today events');
	}, [dispatch, loadTodayEvents]);

	return (
		<div>
			{/* <Banner /> */}
			<TopGrid events={todayEvents} />
			<Events events={allEvents} />
		</div>
	);
};

export default LandingPage;
