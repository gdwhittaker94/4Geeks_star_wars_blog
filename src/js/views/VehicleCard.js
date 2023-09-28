import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// REMOVE BOOTSTRAP STYLING AND MAKE CUSTOM CARD LATER

export const VehicleCard = () => {
  const { store, actions } = useContext(Context);
  const [vehicles, setVehicles] = useState("");
  // Starts as empty string (necessary for ternary), then set as array via map()

  // Each component does its own fetch call to get the relevant data for its cards
  useEffect(() => {
    // async must go INSIDE useEffect function to work
    async function fetchVehiclesData() {
      try {
        const vehiclesResponse = await fetch("https://www.swapi.tech/api/vehicles");
        const vehiclesData = await vehiclesResponse.json();
        setVehicles(vehiclesData.results)
      } catch (error) {
        console.error("Error in fetch call:", error);
      }
    }
    fetchVehiclesData(); // must call this function to work
  }, []);

  return (
    vehicles == ""
        ? <span className="loader"></span> // while waiting to receive data
        : vehicles.map((value, index) => (
            <div className="card" key={index}>
                <img
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${value.uid}.jpg`}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }}
                    className="card__img" alt="A Star Wars Character"
                />
                <div className="card__body">
                    <h5 className="card__title">{value.name}</h5>
                    <div className="card__buttons"> 
                        <Link to={`/VehicleDetailCard/${value.uid}`} onClick={() => actions.fetchMoreDetails(value.url)}>
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
