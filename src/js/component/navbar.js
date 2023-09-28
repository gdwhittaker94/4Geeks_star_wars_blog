import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/star_wars_logo.png"
import "../../styles/index.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [favorites, setFavorites] = useState(false);

	useEffect(() => {
		setFavorites(true);
	}, [store.favorites]);

	return (
		<nav className="navBar">
			<div className="navBar__container">
				<Link className="navBar__img" to="/" >
					<img src={logo} alt="Star Wars Logo" className="navbar__logo" />
				</Link>
				<div className="navBar__favList">
					<p className="navBar__favListText">
						❤️ 0 ⏷
					</p>
					{favorites == false
						? null
						: <ul className="navBar__favListContainer">
							{store.favorites.map((value, index) => (
								<li className="navBar__favListItem" key={index}>
									{value} <span>⊗</span>
								</li>
							))
							}
						</ul>
					}
				</div>
				<div className="navBar__pageLinksContainer">
					{/* How to link these spans to sections of the page? */}
					<a to="#characters"><span className="navBar__pageLinks">Characters</span></a>
					<a to="#vehicles"><span className="navBar__pageLinks">Vehicles</span></a>
					<a to="#planets"><span className="navBar__pageLinks">Planets</span></a>
				</div>
			</div>

		</nav>
	);
};


// MY CONFIG

{/* <div className="navBar__favList">
					<p className="navBar__favListText">
						❤️ 0 ⏷
					</p>
					{favorites == false
						? null
						: <ul className="navBar__favListContainer">
							{store.favorites.map((value, index) => (
								<li className="navBar__favListItem" key={index}>
									{value} <span>⊗</span>
								</li>
							    ))
							}
						</ul>
					}
				</div> */}

// BOOTSTRAP 

{/* <Dropdown>
	<Dropdown.Toggle id="dropdown-basic" className="navBar__favList">
		❤️ 0 ⏷
	</Dropdown.Toggle>
	<Dropdown.Menu>
		{favorites == false
			? null
			: store.favorites.map((value, index) => (
				<Dropdown.Item key={index} className="navbar__favListItem">{value} <span>⊗</span></Dropdown.Item>
			))
		}
	</Dropdown.Menu>
</Dropdown> */}