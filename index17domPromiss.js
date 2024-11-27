// async function getData() {
//     // Simulate getting data from a server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// } // async func banane ka fayda ye hai ki ye background me chalta rahega.

//************* fetch api **************/

async function getData() {
    // Simulate getting data from a server
  let x = await  fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())  // ye isi k sath tha jab side se api copy kiya tha 
    // .then(json => console.log(json))
    // fetch api ko hame do baar await karna padta hai parse karne k liye
    // fetch api js k under built in hai 
    let data = await x.json()
    console.log(data);
    return 455
}

async function main() {
  console.log("loading modules");

  console.log("Do something else");

  console.log("Load data");

  let data = await getData(); // abhi hum await ko async function k under hi use kar sakte hai .

  console.log(data);
  console.log("process data");
  console.log("task 2");
}
main();
// data.than((v)=>{
// consol.log("data")
// console.log("process data"); // ye to ho gai call back func approch
// console.log("task 2");

// })

// console.log("process data");
