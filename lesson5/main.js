// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

// - Створити функцію яка обчислює та повертає площу прямокутника зі сторонами a, b
// const squareR = (a, b) => a * b;
// console.log(squareR(2, 2))

// - Створити функцію яка обчислює та повертає площу кола з радіусом r
// const circleR = (r) => Math.PI * Math.pow(r, 2);
// console.log(circleR(5))

// - Створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
// const cylinderR = (r, h) => 2 * Math.PI * r * (r + h);
// console.log(cylinderR(5, 10))

// - Створити функцію яка приймає масив та виводить кожен його елемент
// const arrOfNum = [11, 22, 33, 44, 55, 66, 77]
// const iterOfArr = (array) => {
//     for (const item of array) {
//         console.log(item)
//     }
// }
// iterOfArr(arrOfNum);

// - Створити функцію яка створює параграф з текстом. Текст задати через аргумент
// const paragraphCreator = (arguments) => document.write(`<p>${arguments}</p>`)
// paragraphCreator("Hello Word")

// - Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const liCreator = (arguments, amount) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < amount; i++) {
//         document.write(`<li>${arguments}</li>`)
//     }
//     document.write(`</ul>`)
// }
// liCreator("Hello everynyan!", 10)

// - Створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список
// const liCreator = (...arr) => {
//     document.write(`<ul>`)
//     for (let item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// liCreator(22, "text", false)

// - Створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.
// const entity = [
//     {id: 1, name: "Alex", age: 25},
//     {id: 2, name: "Steve", age: 27},
//     {id: 3, name: "Player", age: 13}
// ]
// const blockForEntity = (arrOfObj) => {
//     for (const obj of arrOfObj) {
//         document.write(`<div>ID: ${obj.id}, Name: ${obj.name}, Age: ${obj.age}</div>`)
//     }
// }
// blockForEntity(entity)

// - Створити функцію яка повертає найменше число з масиву
// const numbers = [2, 3, 7, 1, -4, 9, 100500, 8]
// const findNum = (arr) => {
//     let min = arr[0]
//     for (const num of arr) {
//         if (min > num) {
//             min = num
//         }
//     }
//     return min
// }
// console.log(findNum(numbers));

// - Створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його
// const numbers = [2, 3, 7, 1, 9, 8, 5]
// const sum = (arr) => {
//     let result = 0
//     for (const num of arr) {
//         result = result + num
//     }
//     return result
// }
// console.log(sum(numbers));

// - Створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// const numbers = [11, 22, 33, 44]
// const swap = (arr, index1, index2) => {
//     const i1 = arr[index1]
//     const i2 = arr[index2]
//     arr[index1] = i2
//     arr[index2] = i1
//     return arr
// }
// console.log(swap(numbers, 1, 2));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     for (const currency of currencyValues) {
//         if (currency.currency === exchangeCurrency) {
//             return sumUAH / currency.value
//         }
//     }
// }
// console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));