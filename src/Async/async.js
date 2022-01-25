const fetch = require("node-fetch")

const API = "https://rickandmortyapi.com/api/character/";

const getData = async (url) => {
  try {
    const request = await fetch(`${url}`);
    const response = await request.json();
    console.log(response)
  } catch (err) {
    return new Error(err);
  }
};

getData(API)