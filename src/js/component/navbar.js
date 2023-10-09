import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/star_wars_logo.png"
import { Delete } from "./delete";
import "../../styles/index.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [toggle, setToggle] = useState(false);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		setToggle(true);
	}, [store.favorites]);

	const deleteItem = (index) => {                       
        const updatedFavorites = [...store.favorites];            
        updatedFavorites.splice(index, 1);                 
        actions.updateFavs(updatedFavorites);                    
    }

	return (
		<nav className="navBar">
			<div className="navBar__container">
				<Link className="navBar__img" to="/" >
					<img src={logo} alt="Star Wars Logo" className="navbar__logo" />
				</Link>
				<div className="navBar__favListPill">
					<p className="navBar__favListPillText" onClick={() => setToggle(!toggle)}>
						❤️ {store.favorites.length} ⏷
					</p>
					{toggle == false
						? null
						: <ul className="navBar__favUL">
							{store.favorites.map((value, index) => (
								<li className="navBar__favULItem" key={index}>
									<Delete onDelete={() => deleteItem(index)}/> {value} 
								</li>
							))
							}
						</ul>
					}
				</div>
				<div className="navBar__pageLinksContainer">
					{/* How to link these spans to sections of the page? */}
					<a href="#characters"><span className="navBar__pageLinks">Characters</span></a>
					<a href="#vehicles"><span className="navBar__pageLinks">Vehicles</span></a>
					<a href="#planets"><span className="navBar__pageLinks">Planets</span></a>
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

// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

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