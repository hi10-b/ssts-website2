import React from "react";
import { Link, BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navigation from "../features/navigation";
import LandingPage from "./landingPage";
import Gallery from "./gallery";
import Banner from "../features/banner";
import LoginForm from "./user/loginForm";
import Admin from "./user/admin";
import Kirtans from "./kirtans";

const Home = () => {
	return (
		<Router>
			<Banner className="d-none d-md-block" />
			<Navigation />
			<Routes>
				<Route path="/" exact element={<LandingPage />} />
				<Route path="/kirtans" exact element={<Kirtans />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/adminLogin" element={<LoginForm />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
		</Router>
	);
};

export default Home;
