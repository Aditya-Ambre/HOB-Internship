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
}
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
    document.getElementById("demo").innerHTML = tab;
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
  // function show(data, type) {
  //   const obj = data;
  //   console.log(type);
  //   let tab = `<tr>
  //           <th>Name</th>
  //           <th>Identifier</th>
  //             </tr>`;

  //   // Loop to access all rows
}

// fetch("https://iconfinder-api-auth.herokuapp.com/v4/styles?count=30")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// fetch("https://iconfinder-api-auth.herokuapp.com/v4/categories?count=30")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// const obj = JSON.parse(data);
// document.getElementById("demo").innerHTML =
//   obj.Array[0].name + " " + obj.Array[1].name
