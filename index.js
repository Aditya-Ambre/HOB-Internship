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
  console.log(data);
  //   if (response) {
  //     hideloader();
  //   }
  show(data, type);
  // console.log(data.icons[0].raster_sizes[5].formats[0].preview_url);
}
// getapi(iconApi, 0);
// Calling that async function
getapi(stylesApi, 0);
getapi(categoriesApi, 1);
// Function to define innerHTML for HTML table
function show(data, type) {
  const obj = data;
  console.log(type);
  let tab = `<option value=""></option>`;
  if (type == 0) {
    // Loop to access all rows
    for (let i = 0; i < 14; i++) {
      tab += `
         <option value="${obj.styles[i].identifier}">${obj.styles[i].name}</option>
        `;
      console.log(obj.styles[i].name);
    }
    // Setting innerHTML as tab variable
    document.getElementById("styles").innerHTML = tab;
  } else {
    for (let i = 0; i < 30; i++) {
      tab += `
         <option value="${obj.categories[i].identifier}">${obj.categories[i].name}</option>
        `;
      console.log(obj.categories[i].name);
    }
    // Setting innerHTML as tab variable
    document.getElementById("category").innerHTML = tab;
  }
}
