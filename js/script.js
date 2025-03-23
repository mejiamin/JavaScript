
// script.js

let price = 4000;
let discountedPrice;

if (1000 <= price && price < 3000) {
    discountedPrice = price - (price * 5 / 100);
} else if (3000 <= price && price < 5000) {
    discountedPrice = price - (price * 10 / 100);
} else if (5000 <= price) {
    discountedPrice = price - (price * 15 / 100);
} else {
    discountedPrice = price;
}

console.log(discountedPrice);