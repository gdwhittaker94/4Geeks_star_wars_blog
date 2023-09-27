import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

export const CharDetailCard = () => {
    const { store, actions } = useContext(Context);
    const {id} = useParams(); // = index of clicked card
    const [homeworld, setHomeworld] = useState("");

    /* PROBLEM: 
    --> V1 (below) worked but didn't show value and didn't wait 5 seconds
    --> V2 returns url as "undefined" -> need setTimeout? how does that work here? 
    */

    // V2
    useEffect(() => {
        // async must go INSIDE useEffect function to work
        async function fetchHomeworld(url) {
            console.log(url)
            try {
                const homeworldResponse = await fetch(url);
                                                                        console.log("homeworld res:", homeworldResponse)
                const homeworldData = await homeworldResponse.json();   
                                                                        console.log("homeworld data:", homeworldData)
                setHomeworld(homeworldData.results.properties.name)
                                                                        console.log("homeworld planet:", homeworldData.results.properties.name)
                console.log(homeworld)
            } catch (error) {
                console.error("Error in fetch call:", error);
            }
        }
        fetchHomeworld(store.moreDetails.homeworld); // must call this function to work
    }, []);

    return (
            <>
                <h1>Character #{id}</h1> 
                <p>Name: {store.moreDetails.name}</p>
                <p>Gender: {store.moreDetails.gender}</p>
                <p>Birth Year: {store.moreDetails.birth_year}</p>
                <p>Height: {store.moreDetails.height}</p>
                <p>Hair Color: {store.moreDetails.hair_color}</p>
                <p>Eye Color: {store.moreDetails.eye_color}</p>
                <p>Homeworld: {homeworld == ""? "Loading" : homeworld}</p>
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

// V1
// const fetchHomeworld = async (url) => {
    //     try {
    //         const response = await fetch(url);
    //                                                         console.log("homeworld response", response)
    //         const data = await response.json(); 
    //                                                         console.log("homeworld data:", data)
    //         const homeworldData = data.result.properties.name;
    //                                                         console.log("homeworld planet name:", homeworldData)
    //         setHomeworld(homeworldData);
    //                                                         console.log("homeworld var:", homeworld);
    //     } catch (error) {
    //         console.error("Error in fetch call:", error);
    //     }
    //         return homeworld;
    //     }

    // LATER WITHIN COMPONENT BODY
    // <p>Homeworld: {setTimeout(fetchHomeworld(store.moreDetails.homeworld), 5000)}</p>
