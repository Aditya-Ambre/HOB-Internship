const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer ROqwerCTavoSaqEE6G4YDxlovyop5PqLfrPUFfYaEjIr9cBF45fxxr1rVLSnnFZ8",
  },
};

const stylesApi =
  "https://iconfinder-api-auth.herokuapp.com/v4/styles?count=30";
const categoriesApi =
  "https://iconfinder-api-auth.herokuapp.com/v4/categories?count=30";
const iconApi =
  "https://iconfinder-api-auth.herokuapp.com/v4/icons/search?query=Car&count=30";

// Defining async function
async function getapi(url, type) {
  // Storing response
  const response = await fetch(url, options);

  // Storing data in form of JSON
  var data = await response.json();

  show(data, type);
}

// Function to define innerHTML for HTML table
function show(data, type) {
  const obj = data;

  let tab = `<option value=""></option>`;
  if (type == 0) {
    // Loop to access all rows
    for (let i = 0; i < 14; i++) {
      tab += `
         <option value="${obj.styles[i].identifier}">${obj.styles[i].name}</option>
        `;
    }
    // Setting innerHTML as tab variable
    document.getElementById("styles").innerHTML = tab;
  } else {
    for (let i = 0; i < 30; i++) {
      tab += `
         <option value="${obj.categories[i].identifier}">${obj.categories[i].name}</option>
        `;
    }
    // Setting innerHTML as tab variable
    document.getElementById("category").innerHTML = tab;
  }
}

async function geticon(url) {
  const response = await fetch(url, options);
  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  // console.log(data.icons[0].raster_sizes[5].formats[0].preview_url);
  let img = ``;
  for (let i = 0; i < 30; i++) {
    var url = data.icons[i].raster_sizes[5].formats[0].preview_url;
    console.log(url);
    img =
      img +
      `<img src="${url}" alt="" width="64" data-icon-id="${data.icons[i].icon_id}">`;
  }
  const result = document.getElementById("result");
  result.innerHTML = img;
}

// Calling that async function
getapi(stylesApi, 0);
getapi(categoriesApi, 1);
geticon(iconApi);
