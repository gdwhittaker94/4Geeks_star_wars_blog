import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const FavList = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            {store.favorites == ""
                ? <div className="favList__empty">"Favorites List 0"</div>
                : store.favorites.map((value, index) => (
                    <ul className="favList__data">
                        <li key={index}>{value}</li><span>⨯</span>
                    </ul>
                ))}
        </div>
    )
}