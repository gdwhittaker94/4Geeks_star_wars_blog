import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

export const CharDetailCard = () => {
    const { store, actions } = useContext(Context);
    const {id} = useParams(); // = index of clicked card

    return (
        <>
            <h1>{id}</h1> 
            <p>{store.characterDetails.name}</p>
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
    /* Situation: 
    - fetch on start -> superficial card details + displayed
    - Click character card -> setCharUrl() = url with details of char
    - Sets off fetchCharDetails() -> gets object with char details
    - Store 'characterDetails' contains these details -> occurs after 1/2 seconds
    - Have to wait for that data to appear before displaying it on this page
    
    Problem:
    - Trying setTimeout to delay visual, nothing appearing
    - Random number appears 


    */
   
}

    // return (
    //     setTimeout(() => {
    //             <div>
    //                 <p>1: {store.characterDetails.birth_year}</p>
    //             </div>
    //         }, 1500)
    //     )

    // useEffect(() => {
    //     actions.fetchCharDetails();
    //     console.log(store.characterDetails)
    // }, [])

    // const {details, setDetails} = useState({});

    // useEffect(async() => {
    //     const detailResponse = await fetch(store.character[id].url);
    //     const detailData = await detailResponse.json();
    //     const saveDetails = await setDetails(detailData.result.properties);
    //     console.log(details);
    // }, [])

    // console.log(store.character[0].url.result.properties.height)

    
