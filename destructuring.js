// // 1.)
// // let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// // let {numPlanets, yearNeptuneDiscovered} = facts;

// // console.log(numPlanets); // ? => 8
// // console.log(yearNeptuneDiscovered); => 1846

// // 2.)
// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;
  
//   console.log(discoveryYears); // ? => {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// //   3.)
// function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
  
//   getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ? => `Your name is Alejandro and you like Purple`
//   getUserData({firstName: "Melissa"}) // ? => `Your name is Melissa and you like green
//   getUserData({}) // ? => your name is undefined and you like green.

// // 4.)
// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // ? => maya
// console.log(second); // ? => Marissa
// console.log(third); // ? => Chi

// // 5.)
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // ? => [10, 30, 20]

// // 6.)
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]
  
//   console.log(raindrops); // ? => raindrops on roses
//   console.log(whiskers); // ? => whislets on kittens
//   console.log(aFewOfMyFavoriteThings); // ? => rest of the array 

//   7.)
// let obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//  let {numbers: {a}} = obj
// console.log(a)

//  let {numbers: {b}} = obj

// console.log(b)

// 8.)
// let arr = [1, 2];


// [arr[0],arr[1] ] = [arr[1], arr[0]]
// console.log(arr)

// 9.)

// const raceResults = (arr) => {
// let [first, second, third, ...rest] = arr
// return {'first': first,
// 'second': [second],
// 'third': [third], 
// 'rest': [rest]

// }

// }
// console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']))
// /*
//   {
//     first: "Tom",
//     second: "Margaret",
//     third: "Allison",
//     rest: ["David", "Pierre"]
//   }
// */

