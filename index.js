// var generateName = require("sillyname");

import generateName from "sillyname"; // This is the ECMA version of the above require()
import superheroes from "superheroes";

var sillyname = generateName();

console.log(`My name is ${sillyname}.`)

// Challenge: superheroes package - Install the package and console.log() your superhero name:

superheroes.all;
console.log(`My superhero name is ${superheroes.random()}!`)
