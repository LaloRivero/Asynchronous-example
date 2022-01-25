const getData = require("./getData");

const API = "https://rickandmortyapi.com/api/character/";

getData(API)
  .then((response) => {
    console.log(response.results[0].url);
    return getData(response.results[0].url);
  })
  .then((response) => {
    console.log(response);
    return getData(response.origin.url);
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));
