import React, { useContext } from 'react'
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

export const PlanetDetailCard = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams(); // = index of clicked card

    return (
        <>
        <div className='details'>
            <div className='details__img'>
                <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }}
                    className="card-img-top" alt="An image of this StarWars planet"
                />
            </div>
            {store.arrived == false
                ? <span class="loader2"></span>
                : <div className='details__info'>
                    <h1 className='details__header'>{store.moreDetails.name}</h1>
                    <p className='details__text'>Diameter: {store.moreDetails.diameter}</p>
                    <p className='details__text'>Rotation Period: {store.moreDetails.rotation_period}</p>
                    <p className='details__text'>Orbital Period: {store.moreDetails.orbital_period}</p>
                    <p className='details__text'>Gravity: {store.moreDetails.gravity}</p>
                    <p className='details__text'>Population: {store.moreDetails.population}</p>
                    <p className='details__text'>Climate: {store.moreDetails.climate}</p>
                    <p className='details__text'>Terrain: {store.moreDetails.terrain}</p>
                    <p className='details__text'>Surface Water: {store.moreDetails.surface_water}</p>
                </div>
            }
        </div>
        <div className='details__description'>
            In the vast Star Wars cinematic universe, you'll encounter an incredible array of planets and celestial bodies, each with its own unique geography, culture, and significance. From the desert world of Tatooine, where the journey of Luke Skywalker begins, to the lush forests of Endor, home to the adorable Ewoks, these planets are more than just settings—they're characters in their own right. Whether it's the urban sprawl of Coruscant, the ice-covered Hoth, or the mystical Ahch-To, where the ancient Jedi temple resides, Star Wars planets are a testament to the creativity and imagination of the creators. Journey through these remarkable worlds, and you'll discover that the Star Wars galaxy is a captivating tapestry of landscapes that play a pivotal role in the epic saga.
        </div>
        </>
    )
}