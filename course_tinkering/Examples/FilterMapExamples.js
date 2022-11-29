var animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "fish" },
];

//FILTER
// var dogs = []
// for(var i=0; i<animals.length;i++){
// if(animals[i].species === 'dog')
// dogs.push(animals[i])
// }

var isDog = function (animal) {
  return animal.species === "dog";
};
var dogs = animals.filter(isDog);

console.log("RESULT FOR FILTER");
console.log(dogs);

// MAP
// var names = []
// for(var i=0; i<animals.length;i++){
//     names.push(animals[i].name)
// }

// var names = animals.map(function (animals) {
//   return animals.name + 'is a ' + animals.species;
// });

//MAP ARROW FUNCTION
var names = animals.map((x)=>x.name)

console.log("RESULT FOR MAP");
console.log(names);
