import React, { useState, useEffect, useContext } from "react";

import { CharCard } from "./CharCard";
import { VehicleCard } from "./VehicleCard";
import { PlanetCard } from "./PlanetCard";

// import { Context } from "../store/appContext";

import "../../styles/index.css";

export const MainPage = () => {
    // const { store, actions } = useContext(Context);

    return (
            <div className="d-flex flex-column">
                <h1>Characters</h1>
                <div className="d-flex overflow-scroll mb-3">
                    <CharCard/>
                </div>
    
                <h1>Vehicles</h1>
                <div className="d-flex overflow-scroll mb-3">
                    <VehicleCard/>
                </div>

                <h1>Planets</h1>
                <div className="d-flex overflow-scroll mb-3">
                    <PlanetCard/>
                </div>
            </div>
    );
};
