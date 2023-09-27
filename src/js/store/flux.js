import React from 'react'

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			//////////// MY STORE/STATE ///////////
			moreDetails: [],		
			//////////// DEMO STORE/STATE ///////////
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ], 
		},
		actions: {
			//////////// MY FUNCTIONS ////////////
			fetchMoreDetails: async (url) => {
				const store = getStore();
				try {
					const urlResponse = await fetch(url);
					const urlData = await urlResponse.json();
					setStore({moreDetails: urlData.result.properties});
				} catch (error) {
					console.error("Error in fetch call:", error);
				}
				console.log("FetchMoreDetails func:", store.moreDetails)
			},
			
			
			//////////// DEMO FUNCTIONS ////////////
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "characters": data.results }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		},
	};
};

export default getState;
