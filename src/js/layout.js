// React Imports
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components Import
import ScrollToTop from "./component/scrollToTop";
import { Navbar } from "./component/navbar";

// Views Import
import { MainPage } from "./views/MainPage";
import { CharDetailCard } from "./views/CharDetailCard";
import { VehicleDetailCard } from "./views/VehicleDetailCard";
import { PlanetDetailCard } from "./views/PlanetDetailCard";

// App Context
import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/CharDetailCard/:id" element={<CharDetailCard />} />
						<Route path="/VehicleDetailCard/:id" element={<VehicleDetailCard />} />
						<Route path="/PlanetDetailCard/:id" element={<PlanetDetailCard />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
