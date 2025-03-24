
// script.js

let number = 123;
let quantity = 0;

for (let i = 1; number / i >= 1; i *= 10) {
    quantity++;
    console.log(quantity);
}

// while (1 <= number) {
//     number /= 10;
//     quantity++;
//     console.log(quantity);
// }