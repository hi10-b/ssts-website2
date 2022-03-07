import './App.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchEvents } from './redux/actions/eventsAction';

function App() {
	useEffect(() => {
		fetchEvents();
		console.log('rendered');
	});
	const events = useSelector((state) => state.allEvents.id);
	return (
		<div className="App">
			<h1>hello</h1>
			<h1>{events}</h1>
		</div>
	);
}

export default App;
