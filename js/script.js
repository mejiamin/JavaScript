
// script.js





//  --- Array in tasks in average   ---

// let luggage = ['пакет', 'мяч', 'тапки', 'когтеточка', 'коробка', 'миска', 'мята'];
// let startIndex = 2;       //  Стартовый индекс
// let quantity = 3;         //  Количество вещей
// let chosenLuggage = [];   //  Ожидаю результать

// for (let i = startIndex; i < startIndex + quantity; i++) {
//     chosenLuggage.push(luggage[i]);
// }

// console.log(chosenLuggage);





//  --- Array in tasks in average   ---

// let books = ['Улисс', 'Маугли', 'Сияние', 'Ревизор', 'Гамлет', 'Обломов', 'Дюймовочка', 'Шантарам', 'Вий', 'Сильмариллион', 'Оно'];
// let minNumber = 3;
// let maxNumber = 5;
// let filteredBooks = [];

// for (let i = 0; i < books.length; i++) {
//     if (minNumber <= books[i].length && books[i].length <= maxNumber) {
//         filteredBooks.push(books[i]);
//     }
// }

// console.log(filteredBooks);





//  --- Array in tasks in average   ---

// // Алфавит
// let symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

// // Смещение
// let shift = 10;

// // Закодированное сообщение
// let encodedSymbols = [8, 28, 36, 52, 56, 40, 23, 31, 56, 39, 38, 28, 48, 52, 58, 56, 38, 27, 32, 37, 56, 40, 23, 31, 56, 39, 38, 41, 39, 32, 57];

// // Раскодированное сообщение
// let decodedMessage = '';

// for (let i = 0; i < encodedSymbols.length; i++) {
//     decodedMessage += symbols[(encodedSymbols[i] + shift) % symbols.length];
// }

// console.log(decodedMessage);





//  --- Function in tasks in average   ---

// function calculate(firstNumber, secondNumber, operator) {
//     let x = Number(firstNumber);
//     let y = Number(secondNumber);

//     if (operator === '+') {
//         return x + y;
//     } else if (operator === '-') {
//         return x - y;
//     } else if (operator === '*') {
//         return x * y;
//     } else if (operator === '/') {
//         return x / y;
//     }
// }

// calculate('5', '5', '*');





//  --- Function in tasks in average   ---

// function getDiet(calorie, limit) {
//     let quantity = 0;

//     while (limit >= calorie[quantity]) {
//         limit -= calorie[quantity];
//         quantity++;
//     }

//     return quantity;
// }

// getDiet([10, 20, 30, 40, 90], 100);





//  --- Function in tasks in average   ---

// let documents = ["03112018", "02092016", "11092015", "05052018", "07072007", "11112011"];

// function getDocumentsNumbers(arr, year) {
//     let quantity = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].indexOf(year, 4) === 4) {
//             quantity++;
//         }
//     }
//     return quantity;
// };

// getDocumentsNumbers(documents, 2018);





//  --- Function in tasks in average   ---

// let incomeTax = 13;
// let contributions = 30;

// function calculateExpenses(netSalary) {
//     return Math.round(netSalary / (100 - incomeTax) * 100 * (contributions / 100 + 1));
// }

// calculateExpenses(100000);





//  --- Array in tasks in average   ---

// function getRepeats(arr) {
//     let object = {};

//     for (let i = 0; i < arr.length; i++) {
//         if (!(arr[i] in object)) {
//             object[arr[i]] = 1;
//         } else {
//             object[arr[i]] += 1;
//         }
//     }

//     return object;
// }

// getRepeats(["картошка","картошка","кофе","торт","салат","кофе","торт","картошка"]);





//  --- Array in tasks in average   ---

// function getZippedArrays(name, value) {
//     let obj = {};
//     for (let i = 0; i < name.length; i++) {
//         obj[name[i]] = value[i];
//     }
//     return obj;
// }

// getZippedArrays(['имя', 'фамилия', 'отчество'], ['Семён', 'Василенко', 'Эльдарович']);