import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from '../features/navigation';
import LandingPage from './landingPage';
import Gallery from './gallery';
import Banner from '../features/banner';
import LoginForm from './user/loginForm';

const Home = () => {
	return (
		<Router>
			<Banner />
			<Navigation />
			<Routes>
				<Route path="/" exact element={<LandingPage />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/admin" element={<LoginForm />} />
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
		</Router>
	);
};

export default Home;
