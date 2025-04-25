
// script.js





//  --- Basics in tasks in advanced   ---

// let firstLeg = 300;     // Длины катетов
// let secondLeg = 700;    // Длины катетов

// let hypotenuse = Math.round(Math.sqrt(firstLeg ** 2 + secondLeg ** 2));    // Результат гипотенуза
// console.log(hypotenuse);

// let perimeter = firstLeg + secondLeg + hypotenuse ;    // Результат периметра
// console.log(perimeter);





//  --- Basics in tasks in advanced   ---

// let age = 5;                    // Возраст
// let pulseAtRest = 60;           // ЧСС в покое
// let intensity = 75;             // Интенсивность

// let pulseAtWorkout = Math.round(((220 - age) - pulseAtRest) * intensity / 100 + pulseAtRest);     // ЧСС для тренировки

// console.log(pulseAtWorkout);





//  --- Basics in tasks in advanced   ---

// let weight = 5;        // Вес
// let length = 60;       // Длина
// let age = 5;        // Возраст
// let activityRate = 1.725;    // Коеффициент

// let metabolism = 88.362 + (13.397 * weight) + (4.799 * length) - (5.677 * age);            // Метаболизм

// let calorieRate = Math.round(metabolism * activityRate);

// let proteins = Math.round(calorieRate * 0.40);
// let fats = Math.round(calorieRate * 0.25);
// let carbohydrates = Math.round(calorieRate * 0.35);

// console.log(calorieRate);
// console.log(proteins);
// console.log(fats);
// console.log(carbohydrates);





//  --- Conditions in tasks in advanced   ---

// let temperature = 20;
// let itsRaining = false;

// let minutes;

// if (itsRaining) {
//     minutes = 0;
// }
// else if (temperature < 0 || temperature > 35) {
//     minutes = 0;
// }
// else if (temperature === 20) {
//     minutes = 20;
// }
// else if (0 < temperature && temperature < 20) {
//     minutes = temperature;
// }
// else if (20 < temperature && temperature < 35) {
//     minutes = 20 - (temperature - 20);
// }





//  --- Loops in tasks in advanced   ---

// let days = 10;              // 10 // Дней в периоде
// let period = 3;             // Как часто я ем протеин (раз в три дня)
// let workDayAmount = 200;    // Количество протеина в будние
// let weekendAmount = 100;    // Количество протеина в выходные

// let total = 0;

// for (let i = period; i <= days; i += period) {
//     if (i % 7 === 6 || i % 7 === 0) {
//         total += weekendAmount;
//     } else {
//         total += workDayAmount;
//     }
// }

// console.log(total);





//  --- Loops in tasks in advanced   ---

// let poly = 1221;
// let ylop = 0;
// let isPalindrome = false;

// let number = poly;

// while (number > 0) {
//     ylop += number % 10;              // 1
//     ylop *= 10;                       // 10
//     number = number - number % 10;    // 1220
//     number = number / 10;             // 1098
// }
// ylop = ylop / 10;
// console.log(ylop);                    // 1221

// if (poly === ylop) {
//     isPalindrome = true;
// }
// console.log(isPalindrome);            // true





//  --- Arrays in tasks in advanced   ---

// let usersData = ['Виталий Иванович', 'Иннокентий Петрович', 'Александр Александрович', 'Игорь Олегович', 'Евгений Петрович', 'Игнат Денисович', 'Сергей Александрович', 'Семён Петрович'];
// let query = 'Александрович';
// let matchingUsers = 0;

// matchingUsers = usersData.filter((item) => item.indexOf(query) !== -1);

// console.log(matchingUsers.length);





//  --- Arrays in tasks in advanced   ---

// let fibonacciNumbers = [1, 1];
// let numbersQuantity = 7;

// for (let i = 1; i <= numbersQuantity; i++) {
//     fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i]);
// }
// console.log(fibonacciNumbers);





//  --- Arrays in tasks in advanced   ---

// let indicators = ['сила', 'гибкость', 'выносливость', 'скорость', 'ловкость'];
// let levels = [8, 15, 9, 12, 11];
// let trainingTime = 30;

// if (trainingTime <= 30) {
//     levels[indicators.indexOf('скорость')] += 3;
//     levels[indicators.indexOf('ловкость')] += 3;
// } else if (30 < trainingTime && trainingTime <= 60) {
//     levels[indicators.indexOf('гибкость')] += 3;
// } else if (60 < trainingTime) {
//     levels[indicators.indexOf('сила')] += 2;
//     levels[indicators.indexOf('выносливость')] += 2;
// }

// console.log(levels);





//  --- Arrays in tasks in advanced   ---

// let numbers = [1, 4, 5, 9, 2, 5, 1];
// let uniqueNumbers = [];

// uniqueNumbers = numbers.filter((item) =>
//     numbers.indexOf(item) === numbers.lastIndexOf(item));

// console.log(uniqueNumbers);





//  --- Arrays in tasks in advanced   ---

// let numbers = [1, 3, 5, 7, 9, 11];
// numbers.reverse();





//  --- Arrays in tasks in advanced   ---

// let numbers = [3, 5, 15, 6, 2, 1];
// numbers.sort((a, b) => a - b);





//  --- Functions in tasks in advanced   ---

// function getYears(first, last, summa) {
//     let olympYears = [];
//     for (let i = first; i <= last; i++) {
//         let yearsArray = i + [];
//         let sum = 0;
//         for (let j = 0; j < yearsArray.length; j++) {
//             sum += +(yearsArray[j]);
//         }
//         if (sum === summa) {
//             olympYears.push(i);
//         }
//     }
//     return olympYears;
// }





//  --- Functions in tasks in advanced   ---

// function getDayOfWeek(firstDay, requiredDay) {
//     let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
//     let requiredDayIndex = (week.indexOf(firstDay) + requiredDay - 1) % 7;
//     return week[requiredDayIndex];
// }





//  --- Functions in tasks in advanced   ---

// function calculateRoots(a, b, c) {
//     let D = b * b - 4 * a * c;
//     if (D < 0) {
//         return 'Корней нет';
//     } else if (D === 0) {
//         return 'Корень равен ' + (-b / (2 * a));
//     } else if (0 < D) {
//         return 'Первый корень равен ' + ((-b + Math.sqrt(D)) / (2 * a)) + ', второй корень равен ' + ((-b - Math.sqrt(D)) / (2 * a));
//     }
//     return result;
// }

// calculateRoots(1, -2, -3);





//  --- Functions in tasks in advanced   ---

// let calculateDeposit = function (deposit, percent, time, capitalization) {
//     if (!capitalization) {
//         deposit += deposit * percent * time / 100 / 12;
//     } else {
//         for (let i = 0; i < time; i++) {
//             deposit += deposit * percent / 100 / 12;
//         }
//     }
//     return Math.floor(deposit);
// };

// calculateDeposit(100000, 12, 1);





//  --- Functions in tasks in advanced   ---

// let calculateDeposit = function (deposit, percent, time, capitalization) {
//     if (!capitalization) {
//         deposit += deposit * percent * time / 100 / 12;
//     } else {
//         for (let i = 0; i < time; i++) {
//             deposit += deposit * percent / 100 / 12;
//         }
//     }
//     return Math.floor(deposit);
// };

// let getProfitableDeposit = function (deposit, month, percent, percentNew) {
//     let contribution = calculateDeposit(deposit, percent, month, false);
//     let capContribution = calculateDeposit(deposit, percentNew, month, true);
//     if (contribution > capContribution) {
//         return 'Выбирай обычный вклад. Получишь ' + contribution;
//     } else {
//         return 'Выбирай капитализацию. Получишь ' + capContribution;
//     }
// };

// getProfitableDeposit(250000, 14, 7, 6.8);





//  --- Arrays in tasks in advanced   ---

// let data = [
//     {
//         name: 'Петя',
//         age: 5
//     },
//     {
//         name: 'Лёля',
//         age: 2
//     },
//     {
//         name: 'Сима',
//         age: 3
//     }
// ];

// let getSortedArray = function (array, key) {

//     for (let j = 0; j < array.length; j++) {
//         for (let i = 0; i < array.length; i++) {

//             if (array[j][key] < array[i][key]) {
//                 let swap = array[i];
//                 array[i] = array[j];
//                 array[j] = swap;

//             };
//         };
//     };

//     return array;
// };

// // const getSortedArray = (array, key) => array.sort((a,b) => a[key] - b[key]);

// getSortedArray(data, 'age');





//  --- Arrays in tasks in advanced   ---

// let keys = ['имя', 'любимый цвет', 'любимое блюдо'];

// let values = [
//     ['Василий', 'красный', 'борщ'],
//     ['Мария'],
//     ['Иннокентий', 'жёлтый', 'пельмени', '18', 'Азовское']
// ];

// let data = [
//     {
//         'имя': 'Василий',
//         'любимый цвет': 'красный',
//         'любимое блюдо': 'борщ'
//     },
//     {
//         'имя': 'Мария'
//     },
//     {
//         'имя': 'Иннокентий',
//         'любимый цвет': 'жёлтый',
//         'любимое блюдо': 'пельмени'
//     }
// ];

// let getData = function (keysArray, arrayOfDataArrays) {
//     let array = [];
//     for (let i = 0; i < arrayOfDataArrays.length; i++) {
//         let obj = {};
//         for (let j = 0; j < keysArray.length; j++) {
//             if (arrayOfDataArrays[i][j]) {
//                 obj[keysArray[j]] = arrayOfDataArrays[i][j];
//             }
//         }
//         array.push(obj);
//     }
//     return array;
// }

// // const getData = (keys, data) => data.map(item => item = keys.reduce(
// //     (acc, cur, i) => {
// //         item[i] ? acc[cur] = item[i] : null;
// //         return acc;
// //     }, {}));

// getData(keys, values, data);
