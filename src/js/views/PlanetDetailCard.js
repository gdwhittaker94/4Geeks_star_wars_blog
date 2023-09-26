import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

export const PlanetDetailCard = () => {

    const { store, actions } = useContext(Context);
    const {id} = useParams();
    console.log(id);
    // const {details, setDetails} = useState({});

    // useEffect(async() => {
    //     const detailResponse = await fetch(store.character[id].url);
    //     const detailData = await detailResponse.json();
    //     const saveDetails = await setDetails(detailData.result.properties);
    //     console.log(details);
    // }, [])

    // console.log(store.character[0].url.result.properties.height)


    return (
        <h1>{id}</h1>
    )
}
