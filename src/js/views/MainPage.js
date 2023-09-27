import React, { useState, useEffect, useContext } from "react";
import { CharCard } from "./CharCard";
import { VehicleCard } from "./VehicleCard";
import { PlanetCard } from "./PlanetCard";
// import { Video } from "./Video";
import { Context } from "../store/appContext";
import "../../styles/index.css";

/*  FLOW: 
    - *Todo: video on start - how? 
    - fetch on start -> gets superficial card details + displays them
    - Click character card -> sets off fetchCharDetails() 
    - The resulting object with char details is stored in the store 'characterDetails'
    - In detail card I display these details + photo 
    - fetch for character's 'homeworld'
    
    PROBLEMS:
    - homeworld fetch is not quite working 
        -> happens too quickly, displays numbers, gets planet but doesn't display it

    TODO: 
    - Finish character detail card (everything displays correctly)
    - Do the same for the vehicle and planet cards
    - Favourites button + Favourites list 
    - Styling (all black, cards glow on hover) 

    EXTRA:
    - Hyperspace video on page load (how?)
    - Music plays while viewing page --> music player (auto, can stop it)
    - Noises(?)
*/

export const MainPage = () => {
    const { store, actions } = useContext(Context);

    // TODO: ADD HYPERSPACE VIDEO ON PAGE LOAD
    // useEffect(() => {return <Video/>}, [])

                    return (
                    <div className="d-flex flex-column">
                        <h1>Characters</h1>
                        <div className="d-flex overflow-scroll mb-3">
                            <CharCard />
                        </div>

                        <h1>Vehicles</h1>
                        <div className="d-flex overflow-scroll mb-3">
                            <VehicleCard />
                        </div>

                        <h1>Planets</h1>
                        <div className="d-flex overflow-scroll mb-3">
                            <PlanetCard />
                        </div>
                    </div>
                    );
};
