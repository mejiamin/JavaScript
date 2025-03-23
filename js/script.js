
// script.js

let time = 15;

let goToDairy = false;      // На молокозавод
let goToStore = false;      // В магазин
let goToMarket = false;     // Н рынок

let messageDairy

if ((8 <= time && time < 13) || (14 <= time && time < 19)) {
    goToDairy = true;
} else if ((9 <= time && time < 14) || (15 <= time && time < 17)) {
    goToStore = true;
} else if (7 <= time && time < 20) {
    goToMarket = true;
}

console.log(goToDairy);
console.log(goToStore);
console.log(goToMarket);