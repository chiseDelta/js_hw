// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

// Task 1
let l1 = 'hello';
let l2 = 'owu';
let l3 = 'com';
let l4 = 'ua';
let n1 = 1;
let n2 = 10;
let n3 = -999;
let n4 = 123;
let n5 = 3.14;
let n6 = 2.7;
let n7 = 16;
let t = true;
let f = false;

console.log(l1, l2, l3, l4);
console.log(n1, n2, n3, n4, n5, n6, n7);
console.log(t, f);

console.log("---------------------------");

// Task 2
let firstName = "First";
let middleName = "Middle";
let lastName = "Last";

const person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

console.log("---------------------------");

// Task 3
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);