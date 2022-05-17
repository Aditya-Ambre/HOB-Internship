const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer ROqwerCTavoSaqEE6G4YDxlovyop5PqLfrPUFfYaEjIr9cBF45fxxr1rVLSnnFZ8",
  },
};
const iconApi =
  "https://iconfinder-api-auth.herokuapp.com/v4/icons/search?query=Car&count=30";

async function getapi(url, type) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);

  show(data, type);
  // console.log(data.icons[0].raster_sizes[5].formats[0].preview_url);
}

function search() {}
