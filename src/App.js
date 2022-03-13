import './App.css';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from './redux/actions/eventsAction';

import LandingPage from './pages/landingPage';
import Home from './pages/home';

function App() {
	return <Home className="App" />;
}

export default App;
