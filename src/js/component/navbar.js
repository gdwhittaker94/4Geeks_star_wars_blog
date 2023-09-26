import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/star_wars_logo.png"
import "../../styles/index.css";


export const Navbar = () => {
	return (
		<nav className="navBar">
			<div className="navBar__flex">
				<Link className="navBar__link" to="/" >
					<img src={logo} alt="Star Wars Logo" className="navbar__logo"/>
				</Link>
				<div className="navBar__fav">
					Favourites List 0 ⏷
				</div>
			</div>
		</nav>
	);
};
