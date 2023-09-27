import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// REMOVE BOOTSTRAP STYLING AND MAKE CUSTOM CARD LATER

export const PlanetCard = () => {
  const { store, actions } = useContext(Context);
  const [planets, setPlanets] = useState("");
  // Starts as empty string (necessary for ternary), then set as array via map()

  useEffect(() => {
    // async must go INSIDE useEffect function to work
    async function fetchPlanetsData() {
      try {
        const planetsResponse = await fetch("https://www.swapi.tech/api/planets");
        const planetsData = await planetsResponse.json();
        setPlanets(planetsData.results)
      } catch (error) {
        console.error("Error in fetch call:", error);
      }
    }
    fetchPlanetsData(); // must call this function to work
  }, []);

  return (
    planets == ""
        ? <span className="loader"></span>
        : planets.map((value, index) => (
            <div className="card" key={index}>
                <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${value.uid}.jpg`}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }}
                    className="card__img" alt="A Star Wars Character"
                />
                <div className="card__body">
                    <h5 className="card__title">{value.name}</h5>
                    <div className="card__buttons"> 
                        <Link to={`/PlanetDetailCard/${value.uid}`} onClick={() => actions.fetchMoreDetails(value.url)}>
                            <button className="card__btn">
                                More information
                            </button>
                        </Link>
                        <button to="#" className="card__heartBtn">
                            <i className="fa-solid fa-heart fa-lg card__heart"></i>
                        </button>
                    </div>
                    
                </div>
            </div>
        )
        ))
;}