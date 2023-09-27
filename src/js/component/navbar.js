import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/star_wars_logo.png"
import "../../styles/index.css";


export const Navbar = () => {
	return (
		<nav className="navBar">
			<div className="navBar__container">
				<Link className="navBar__img" to="/" >
					<img src={logo} alt="Star Wars Logo" className="navbar__logo"/>
				</Link>
				<div>

					{/* How to link these spans to sections of the page? */}
					<a to="#characters"><span className="navBar__pageLinks">Characters</span></a>
					<a to="#vehicles"><span className="navBar__pageLinks">Vehicles</span></a>
					<a to="#planets"><span className="navBar__pageLinks">Planets</span></a>
				</div>
			</div>
			
		</nav>
	);
};
