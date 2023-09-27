import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharCard = () => {
    const { store, actions } = useContext(Context);
    let count = 0;
    const [characters, setCharaceters] = useState("");
    // Starts as empty string (necessary for ternary), then set as array via map()

    useEffect(() => {
        // async must go INSIDE useEffect function to work
        async function fetchCharData() {
            try {
                const charResponse = await fetch("https://www.swapi.tech/api/people");
                const charData = await charResponse.json();
                setCharaceters(charData.results)
            } catch (error) {
                console.error("Error in fetch call:", error);
            }
        }
        fetchCharData(); // must call this function to work
    }, []);

    return (
        characters == ""
            ? <span className="loader"></span>
            : characters.map((value, index) => (
                <div className="card" key={index}>
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${count += 1}.jpg`}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }}
                        className="card__img" alt="A Star Wars Character"
                    />
                    <div className="card__body">
                        <h5 className="card__title">{value.name}</h5>
                        <div className="card__buttons"> 
                            <Link to={`/CharDetailCard/${value.uid}`} onClick={() => actions.fetchMoreDetails(value.url)}>
                                <button className="card__btn">
                                    More information
                                </button>
                            </Link>
                            <button to="#" className="card__heartBtn" onClick={() => actions.addToFavs(value.name)}>
                                <span className="card__heart">❤️</span>
                            </button>
                        </div>
                        
                    </div>
                </div>
            )
            ))
};
