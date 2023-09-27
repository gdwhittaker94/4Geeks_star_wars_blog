import React, { useState, useEffect, useContext } from "react";
import { CharCard } from "./CharCard";
import { VehicleCard } from "./VehicleCard";
import { PlanetCard } from "./PlanetCard";
import { FavList } from "./FavList";
import { Context } from "../store/appContext";
// import { Video } from "./Video";

import "../../styles/index.css";

/*  FLOW: 
    - *Todo: video on start - how? 
    - Each card type in MainPage does a fetch -> gets superficial card details + displays them
    - Click card -> sets off fetchMoreDetails() -> store info in 'moreDetails' variable
    - Details card access those details and displays them on page + image call 
        --> CharCard: fetch for character's 'homeworld'
    - 'Star Wars' logo = back button. 
    - <3 Button adds card to favourites list -> dropdown appears 

    TODO: 
    - Finish character detail card (everything displays correctly)
    - Now character cards are all good, do the same for the vehicle and planet cards
    - Favourites button + Favourites list 
    - Styling (all black, cards glow on hover) 
    - Inside navbar: menu w/links to titles -> scrolls down on click 

    EXTRA:
    - Extra text for detailed page (Wikipedia entry?)
    - Hyperspace video on page load (how?)
    - Music plays while viewing page --> music player (auto, can stop it)

        JUANJO: 
        - npm i react-audio-player
        - import ReactAudioPlayer from 'react-audio-player'
        - <ReactAudioPlayer
        src="my_audio_file.ogg"
        autoPlay
        controls
        />
        - import audio 

    - Noises(?)
    - Background parralax effect? (https://www.youtube.com/watch?v=UgIwjLg4ONk&ab_channel=Fireship)
*/

export const MainPage = () => {
    const { store, actions } = useContext(Context);

                    return (
                    <div className="main">
                        {/* <FavList/> */}
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
