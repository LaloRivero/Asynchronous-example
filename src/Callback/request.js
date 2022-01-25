let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = "https://rickandmortyapi.com/api/character/";

function getData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url_api, true);

  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error" + xhttp.status + " " + url_api);
        return callback(error, null);
      }
    }
  };

  xhttp.send();
}

getData(API, function (error1, data1) {
  if (error1) return console.log(error1);
  console.log(data1.info.next);

  next_page = data1.info.next;

  getData(next_page, function (error2, data2) {
    if (error2) return console.log(error2);
    console.log(data2.results[13]);

    next_data = data2.results[13].location.url;

    getData(next_data, function (error3, data3) {
      if (error3) return console.log(error3);
      console.log(data3);
    });
  });
});
