// Array's and Object's
//  - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// const arr = [1, 2, 3, 4, true, false, 'bear', 'simple', {name: 'Max', status: true}, [1, 2, 3]];
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])
// console.log(arr[7])
// console.log(arr[8])
// console.log(arr[9])
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// const book1 = {title: 'Title1', pageCount: 16, genre: false, authors: [{name: 'Max', age: 55}, {name: 'Lena', age: 50}]}
// const book2 = {title: 'Title2', pageCount: 32, genre: true, authors: [{name: 'Sam', age: 21}, {name: 'Mia', age: 27}]}
// const book3 = {title: 'Title3', pageCount: 64, genre: true, authors: [{name: 'Nick', age: 34}, {name: 'Oleg', age: 42}]}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// const users = [
//     {name: 'Max', username: 'max55', password: '55max55'},
//     {name: 'Lena', username: 'lena50', password: '50lena50'},
//     {name: 'Sam', username: 'sam21', password: '21sam21'},
//     {name: 'Mia', username: 'mia27', password: '27mia27'},
//     {name: 'Nick', username: 'nick34', password: '34nick34'},
//     {name: 'Oleg', username: 'oleg42', password: '42oleg42'},
//     {name: 'user1', username: 'userPro1', password: 'userProPassword1'},
//     {name: 'user2', username: 'userPro2', password: 'userProPassword2'},
//     {name: 'user3', username: 'userPro3', password: 'userProPassword3'},
//     {name: 'user4', username: 'userPro4', password: 'userProPassword4'}
// ]
// console.log(users[0].password)
// console.log(users[1].password)
// console.log(users[2].password)
// console.log(users[3].password)
// console.log(users[4].password)
// console.log(users[5].password)
// console.log(users[6].password)
// console.log(users[7].password)
// console.log(users[8].password)
// console.log(users[9].password)

// Logical ramifications
//  - Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// let x = 7;
// if (x !== 0) {
//     console.log('Вірно!')
// } else {
//     console.log('Невірно!')
// }
//  - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю або четверту частину години).
// let time = +prompt('Напишіть число від 1 до 60');
// if (time > 0 && time <= 15) {
//     console.log('Перша частина')
// } else if (time > 15 && time <= 30) {
//     console.log('Друга частина')
// } else if (time > 30 && time <= 45) {
//     console.log('Третя частина')
// } else if (time > 45 && time <= 60) {
//     console.log('Четверта частина')
// } else {
//     console.log('Число неправельне або відсутнє')
// }
//  - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt('Напишіть число від 1 до 31');
// if (day > 0 && day <= 10) {
//     console.log('Перша декада')
// } else if (day > 10 && day <= 20) {
//     console.log('Друга декада')
// } else if (day > 20 && day <= 31) {
//     console.log('Третя декада')
// } else {
//     console.log('Число неправельне або відсутнє')
// }
//  - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let dayOfWeek = +prompt('Напишіть число від 1 до 7')
// switch (dayOfWeek) {
//     case 1:
//         console.log('Monday')
//         break
//     case 2:
//         console.log('Tuesday')
//         break
//     case 3:
//         console.log('Wednesday')
//         break
//     case 4:
//         console.log('Thursday')
//         break
//     case 5:
//         console.log('Friday')
//         break
//     case 6:
//         console.log('Saturday')
//         break
//     case 7:
//         console.log('Sunday')
//         break
//     default:
//         console.log('Число неправельне або відсутнє')
// }
//  - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох. Також потрібно врахувати коли введені рівні числа.
// let firstNumber = +prompt('Введіть перше число');
// console.log('Ваше перше число ' + firstNumber)
// let secondNumber = +prompt('Введіть друге число');
// console.log('Ваше друге число ' + secondNumber)
// if (firstNumber === secondNumber) {
//     console.log('Числа рівні')
// } else if (firstNumber > secondNumber) {
//     console.log('Число ' + firstNumber + ' є найбільшим')
// } else if (firstNumber < secondNumber) {
//     console.log('Число ' + secondNumber + ' є найбільшим')
// } else {
//     console.log('ERROR')
// }
//  - Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default" якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// let x;
// x = x || 'default'
// console.log(x)
//  - З файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// let array = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if (array[0].monthDuration >= 5) {console.log('JavaScript Complex - Super!')}
// if (array[1].monthDuration >= 5) {console.log('Java Complex - Super!')}
// if (array[2].monthDuration >= 5) {console.log('Python Complex - Super!')}
// if (array[3].monthDuration >= 5) {console.log('QA Complex - Super!')}
// if (array[4].monthDuration >= 5) {console.log('FullStack - Super!')}
// if (array[5].monthDuration >= 5) {console.log('Frontend - Super!')}
