import React, { useContext } from 'react'
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

export const VehicleDetailCard = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams(); // = index of clicked card

    return (
        <>
        <div className='details'>
            <div className='details__img'>
                <img
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
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
                    <p className='details__text'>Cost in Credits: {store.moreDetails.cost_in_credits}</p>
                    <p className='details__text'>Crew: {store.moreDetails.crew}</p>
                    <p className='details__text'>Passengers: {store.moreDetails.passengers}</p>
                    <p className='details__text'>Cargo Capacity: {store.moreDetails.cargo_capacity}</p>
                    <p className='details__text'>Consumables: {store.moreDetails.consumables}</p>
                    <p className='details__text'>Length: {store.moreDetails.terrain}</p>
                    <p className='details__text'>Max Atmosphering Speed: {store.moreDetails.max_atmosphering_speed}</p>
                </div>
            }
        </div>
        <div className='details__description'>
            In the expansive Star Wars cinematic universe, you'll encounter a diverse array of vehicles and modes of transport that span the spectrum of design and functionality. From the iconic Millennium Falcon, a legendary smuggling ship, to the sleek and agile X-wing starfighters used by the Rebel Alliance, each vehicle adds a unique dimension to the galaxy far, far away. Whether it's the imposing AT-AT walkers of the Empire, the speedy landspeeders on desert planets like Tatooine, or the unforgettable speeder bikes seen in thrilling chase scenes, Star Wars vehicles are not just means of transportation; they're integral elements of the universe's rich storytelling. Explore these fantastic modes of travel, and you'll discover that the Star Wars galaxy is a showcase of imaginative design and technological wonder.
        </div>
        </>
    )
}