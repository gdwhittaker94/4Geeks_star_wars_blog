import React, { useState, useEffect, useContext } from "react";
import { CharCard } from "./CharCard";
import { VehicleCard } from "./VehicleCard";
import { PlanetCard } from "./PlanetCard";
import { Context } from "../store/appContext";
// import { Video } from "./Video";

import "../../styles/index.css";

export const MainPage = () => {
    const { store, actions } = useContext(Context);

                    return (
                    <div className="main">
                        <h1 className="main__title">Characters</h1>
                        <div className="main__row">
                            <CharCard />
                        </div>

                        <h1 className="main__title">Vehicles</h1>
                        <div className="main__row">
                            <VehicleCard />
                        </div>

                        <h1 className="main__title">Planets</h1>
                        <div className="main__row">
                            <PlanetCard />
                        </div>
                    </div>
                    );
};
