
// script.js

let length = 0.45;
let weight = 4.5;
let fatMass = 0.8;

let bodyMassIndex = Math.round(weight / length ** 2);

let fatPercent = Math.round(fatMass / weight * 100);

console.log(bodyMassIndex);
console.log(fatPercent);