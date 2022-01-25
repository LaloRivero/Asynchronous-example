const fetch = require("node-fetch");

const API_URL = "https://rickandmortyapi.com/api/character/";

const getData = async (api_url) => {
  try {
    const request = await fetch(`${api_url}`);
    const response = await request.json();

    const character_request = await fetch(`${response.results[0].url}`);
    const character_data = await character_request.json();

    //console.log(character_data);

    const location_request = await fetch(`${character_data.location.url}`);
    const location_data = await location_request.json()

    console.log(location_data)
  } catch (err) {
    return new Error(err);
  }
};

getData(API_URL);
