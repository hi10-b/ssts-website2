import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from './redux/actions/eventsAction';

import LandingPage from './pages/landingPage';

function App() {
	return <LandingPage />;
}

export default App;
