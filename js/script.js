
// script.js

let groceries = ['чай', 'шпроты', 'печенье', 'сахар', 'чипсы'];
let shoppingList = '';

for (let i = 0; i < groceries.length; i++) {
    if (1 <= i) {
        shoppingList += ', ';
    }
    shoppingList += groceries[i];
}
console.log(shoppingList);