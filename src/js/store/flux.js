import React from 'react'

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			//////////// MY STORE/STATE ///////////
			characters: [],
			characterDetails: {},

			vehicles: [],
			vehicleDetails: {},

			planets: [],
			planetDetails: {},
			
			//////////// DEMO STORE/STATE ///////////
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			], 
		},
		actions: {
			//////////// MY FUNCTIONS ////////////
			fetchStarWarsData: async () => {
				try {
					const mainResponse = await fetch("https://www.swapi.tech/api/");
					const mainData = await mainResponse.json(); // gives us props of main SWAPI object with links to categories
				
					// ACCESSING MAIN SWAPI OBJECT DATA HOW TO
					// mainData.result = all links
					// mainData.result.X = individual link
					
					// set people data 
					const characterResponse = await fetch(mainData.result.people); 
					const characterData = await characterResponse.json();
					// set vehicle data 
					const vehicleResponse = await fetch(mainData.result.vehicles); 
					const vehicleData = await vehicleResponse.json();
					// set planet data 
					const planetResponse = await fetch(mainData.result.planets); 
					const planetData = await planetResponse.json();

					// ACCESSING SPECIFIC DATA OBJECTS HOW TO 
					// __Data.results = all results (e.g. all characters)
					// __Data.results[0] = a specific result (e.g. Luke Skywalker)

					// setStore variables all at once 
					setStore({ 
						characters: characterData.results,
						vehicles: vehicleData.results, 
						planets: planetData.results
					});
				} catch (error) {
					console.error("Error in fetch call:", error);
				}
			},
			fetchCharDetails: async (url) => {
				const store = getStore();
				try {
					const charUrlResponse = await fetch(url);
					const charUrlData = await charUrlResponse.json();
					setStore({characterDetails: charUrlData.result.properties});
				} catch (error) {
					console.error("Error in fetch call:", error);
				}
				console.log("FetchCharDetails actions 66:", store.characterDetails)
			},
			
			
			//////////// DEMO FUNCTIONS ////////////
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "characters": data.results }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
