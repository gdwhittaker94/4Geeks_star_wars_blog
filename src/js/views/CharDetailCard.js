import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

export const CharDetailCard = () => {
    const { store, actions } = useContext(Context);
    const {id} = useParams(); // = index of clicked card
    const [homeworld, setHomeworld] = useState("");

    /*
    Problem: fetchHomeworld is working but NOT working
    -> gets homeworld, but:
    1) doesn't wait 5000 seconds
    2) doesn't show value where I expect to see it  

    - need to use useEffect? -> tends to give me error messages
    */

    const fetchHomeworld = async (url) => {
        try {
            const response = await fetch(url);
                                                                console.log("response", response)
            const data = await response.json(); 
                                                                onsole.log("data:", data)
            const homeworldData = data.result.properties.name;
                                                                console.log("homeworldData:", homeworldData)
            setHomeworld(homeworldData);
                                                                console.log("homeworld var:", homeworld);
        } catch (error) {
            console.error("Error in fetch call:", error);
        }
            return homeworld;
        }

    return (
            <>
                <h1>{id}</h1> 
                <p>Name: {store.characterDetails.name == ""? "Loading" : store.characterDetails.name}</p>
                <p>Gender: {store.characterDetails.gender}</p>
                <p>Birth Year: {store.characterDetails.birth_year}</p>
                <p>Height: {store.characterDetails.height}</p>
                <p>Hair Color: {store.characterDetails.hair_color}</p>
                <p>Eye Color: {store.characterDetails.eye_color}</p>
                <p>Homeworld: {setTimeout(fetchHomeworld(store.characterDetails.homeworld), 5000)}</p>
                <img 
                        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }}
                        className="card-img-top" alt="..." 
                />
            </>        
    )
  
}

    
