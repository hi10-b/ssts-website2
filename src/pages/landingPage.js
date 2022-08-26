import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, fetchTodayEvents } from '../redux/actions/eventsAction';
import Events from '../features/events';
import TopGrid from '../features/topGrid';
import { Container } from 'react-bootstrap';
import Banner from '../features/banner';
import { allEvents2 } from './allEvents';
import Events2 from '../features/events2';

const LandingPage = () => {
	// const allEvents = useSelector((state) => state.allEvents.allEvents);

	const todayEvents = useSelector((state) => state.allEvents.todayEvents);
	let allEvents = useSelector((state) => state.allEvents.allEvents);

	console.log('allevents', allEvents);
	if (allEvents.length == 0) {
		console.log('events from local');
		allEvents = allEvents2;
	}
	const dispatch = useDispatch();

	const loadEvents = useCallback(async () => {
		try {
			await dispatch(fetchEvents());
		} catch (err) {
			console.log(err);
		}
	}, [dispatch]);

	const loadTodayEvents = useCallback(async () => {
		try {
			await dispatch(fetchTodayEvents());
		} catch (err) {
			console.log(err);
		}
	}, [dispatch]);

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
			<Events2 events={allEvents} />
			{/* <Events events={allEvents} /> */}
		</div>
	);
};

export default LandingPage;
