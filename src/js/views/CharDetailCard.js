import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

export const CharDetailCard = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams(); // = index of clicked card
    const [homeworld, setHomeworld] = useState("");

    useEffect(() => {
        // async must go INSIDE useEffect function to work
        async function fetchHomeworld(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setHomeworld(data.result.properties.name);
        } catch (error) {
            console.error("Error in fetch call:", error);
        }}
        // must call this function to work
        fetchHomeworld(store.moreDetails.homeworld); 
        
        // VERSION FETCH().THEN().CATCH()
        // fetch(store.moreDetails.homeworld)
        //     .then(response => response.json())
        //     .then(data => setHomeworld(data.result.properties.name))
        //     .catch(error => error)

    }, [store.moreDetails]);

    return (
        <>
            <h1>Character #{id}</h1>
            <p>Name: {store.moreDetails.name}</p>
            <p>Gender: {store.moreDetails.gender}</p>
            <p>Birth Year: {store.moreDetails.birth_year}</p>
            <p>Height: {store.moreDetails.height}</p>
            <p>Hair Color: {store.moreDetails.hair_color}</p>
            <p>Eye Color: {store.moreDetails.eye_color}</p>
            <p>Homeworld: {homeworld == "" ? "Loading" : homeworld}</p>
            <img
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }}
                className="card-img-top" alt="..."
            />
        </>
    )
}