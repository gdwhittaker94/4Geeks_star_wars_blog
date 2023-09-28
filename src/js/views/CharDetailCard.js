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
            }
        }
        // must call this function to work
        fetchHomeworld(store.moreDetails.homeworld);

        // VERSION FETCH().THEN().CATCH()
        // fetch(store.moreDetails.homeworld)
        //     .then(response => response.json())
        //     .then(data => setHomeworld(data.result.properties.name))
        //     .catch(error => error)

    }, [store.moreDetails]); //when moreDetails variable is modified, this useEffect executes

    return (
        <>
        <div className='details'>
            <div className='details__img'>
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }}
                    className="card-img-top" alt="An image of this StarWars character"
                />
            </div>
            {store.arrived == false
                ? <span class="loader2"></span>
                : <div className='details__info'>
                    <h1 className='details__header'>{store.moreDetails.name}</h1>
                    <p className='details__text'>Gender: {store.moreDetails.gender}</p>
                    <p className='details__text'>Birth Year: {store.moreDetails.birth_year}</p>
                    <p className='details__text'>Height: {store.moreDetails.height}</p>
                    <p className='details__text'>Hair Color: {store.moreDetails.hair_color}</p>
                    <p className='details__text'>Eye Color: {store.moreDetails.eye_color}</p>
                    <p className='details__text'>Homeworld: {homeworld == "" ? "Loading" : homeworld}</p>
                </div>
            }
        </div>
        <div className='details__description'>
        In the expansive Star Wars cinematic universe, you'll encounter a diverse cast of characters that span the spectrum of personalities, species, and stories. From the legendary Jedi heroes like Luke Skywalker, who wield the mystical Force, to the enigmatic Sith Lords like Darth Vader, whose ominous presence looms large, each character adds a unique dimension to the galaxy far, far away. But it's not just the Force-sensitive individuals that steal the spotlight. Characters like Han Solo, the charismatic smuggler, and the loyal droids R2-D2 and C-3PO bring their own charm and wit to the epic saga. And let's not forget the fascinating alien species like the towering Wookiees, the graceful Twi'leks, and the adorable Ewoks, each contributing to the richness of the Star Wars tapestry. Dive into the captivating journeys of these characters, and you'll discover that the Star Wars universe is an ever-expanding treasure trove of storytelling possibilities.
        </div>
        </>
    )
}