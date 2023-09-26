import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleCard = () => {

  const { store, actions } = useContext(Context);
  let count = 0;

  return (
    store.vehicles.map((value, index) => {
      return (
        // REMOVE BOOTSTRAP STYLING AND MAKE CUSTOM CARD LATER
        <div className="card flex-shrink-0 mb-3" style={{ width: '18rem' }} key={index}>
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${count += 1}.jpg`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{value.name}</h5>
            <p className="card-text text-size">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="#" className="btn btn-primary">Go somewhere</Link>
            <button to="#" className="btn"><i className="fa-solid fa-heart" style={{ color: "#e84a4a" }}></i></button>
          </div>
        </div>
      )
    })
  )
}
