import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// REMOVE BOOTSTRAP STYLING AND MAKE CUSTOM CARD LATER

export const VehicleCard = () => {
  const { store, actions } = useContext(Context);
  const [vehicles, setVehicles] = useState("");
  // Starts as empty string (necessary for ternary), then set as array via map()

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
      ? <span className="loader"></span>
      : vehicles.map((value, index) => (
        <div className="card flex-shrink-0 mb-3" style={{ width: '18rem' }} key={index}>
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${value.uid}.jpg`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
            className="card-img-top" alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{value.name}</h5>
            <p className="card-text text-size">Basic data</p>
            <Link to={`/VehicleDetailCard/${value.uid}`} className="btn btn-primary" onClick={() => actions.fetchMoreDetails(value.url)}>Go somewhere</Link>
            <button to="#" className="btn"><i className="fa-solid fa-heart" style={{ color: "#e84a4a" }}></i></button>
          </div>
        </div>
      )
      ))
};
