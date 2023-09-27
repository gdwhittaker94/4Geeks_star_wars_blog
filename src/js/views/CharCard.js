import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// REMOVE BOOTSTRAP STYLING AND MAKE CUSTOM CARD LATER

export const CharCard = () => {
    const { store, actions } = useContext(Context);
    let count = 0;
    const [characters, setCharaceters] = useState("");

    useEffect(() => {
        async function fetchCharData() {
            try {
                const charResponse = await fetch("https://www.swapi.tech/api/people");
                const charData = await charResponse.json();
                setCharaceters(charData.results)
            } catch (error) {
                console.error("Error in fetch call:", error);
            }
        }
        fetchCharData();
    }, []);

    return (
        characters == ""
        ? <span class="loader"></span> 
        :  characters.map((value, index) => (
                    <div className="card flex-shrink-0 mb-3" style={{ width: '18rem' }} key={index}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${count += 1}.jpg`}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                            }}
                            className="card-img-top" alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">{value.name}</h5>
                            <p className="card-text text-size">Basic data</p>
                            <Link to={`/CharDetailCard/${value.uid}`} className="btn btn-primary" onClick={() => actions.fetchCharDetails(value.url)}>Go somewhere</Link>
                            <button to="#" className="btn"><i className="fa-solid fa-heart" style={{ color: "#e84a4a" }}></i></button>
                        </div>
                    </div>
                )
        ))
};
