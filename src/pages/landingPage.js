import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, fetchTodayEvents } from '../redux/actions/eventsAction';
import Events from '../features/events';
import TopGrid from '../features/topGrid';
import { Container } from 'react-bootstrap';
import Banner from '../features/banner';

const LandingPage = () => {
	const allEvents = useSelector((state) => state.eventsreducer2.allEvents);
	const todayEvents = useSelector((state) => state);

	const dispatch = useDispatch();

	const loadEvents = useCallback(async () => {
		try {
			console.log('events ' + fetchEvents());
			await dispatch(fetchEvents());
		} catch (err) {
			console.log(err);
		}
	}, [dispatch]);

	const loadTodayEvents = useCallback(async () => {
		try {
			console.log('today events: ' + fetchTodayEvents());
			await dispatch(fetchTodayEvents());
		} catch (err) {
			console.log(err);
		}
	}, [dispatch]);
	console.log(todayEvents);

	useEffect(() => {
		loadEvents();
		console.log('rendered');
	}, [loadEvents]);

	useEffect(() => {
		loadTodayEvents();
		console.log('rendered today events');
	}, [loadTodayEvents]);

	return (
		<div
			style={{
				background: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1),rgba(0, 224, 255, 1))`,

				position: 'center',
			}}
		>
			<Banner />
			<TopGrid events={todayEvents} />
			<Events events={allEvents} />
		</div>
	);
};

export default LandingPage;
