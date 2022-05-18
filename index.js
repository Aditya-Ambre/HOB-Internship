const form = document.getElementById("search");
const search = document.getElementById("query");
const stylesApi =
  "https://iconfinder-api-auth.herokuapp.com/v4/styles?count=30";
const categoriesApi =
  "https://iconfinder-api-auth.herokuapp.com/v4/categories?count=30";
// const iconApi = (query) =>
//   "https://iconfinder-api-auth.herokuapp.com/v4/icons/search?query=" +
//   query +
//   "&count=30";
let iconApi;
function icon(query) {
  iconApi = `https://iconfinder-api-auth.herokuapp.com/v4/icons/search?query=${query}&count=30`;
}

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer ROqwerCTavoSaqEE6G4YDxlovyop5PqLfrPUFfYaEjIr9cBF45fxxr1rVLSnnFZ8",
  },
};

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
  let img = ``;
  console.log(data);

  for (let i = 0; i < 30; i++) {
    var url = data.icons[i].raster_sizes[5].formats[0].preview_url;
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

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = search.value;

  if (query) {
    icon(query);
    console.log(iconApi);
    geticon(iconApi);
  }
});
