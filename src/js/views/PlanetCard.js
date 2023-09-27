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
        <div className="card flex-shrink-0 mb-3" style={{ width: '18rem' }} key={index}>
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${value.uid}.jpg`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
            className="card-img-top" alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{value.name}</h5>
            <p className="card-text text-size">Basic data</p>
            <Link to={`/PlanetDetailCard/${value.uid}`} className="btn btn-primary" onClick={() => actions.fetchMoreDetails(value.url)}>Go somewhere</Link>
            <button to="#" className="btn"><i className="fa-solid fa-heart" style={{ color: "#e84a4a" }}></i></button>
          </div>
        </div>
      )
      ))
};
