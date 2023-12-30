// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// -- Створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// const users = [
//     new User(1, 'user1', 'surname1', 'user1@gmail.com', 11111111),
//     new User(2, 'user2', 'surname2', 'user2@gmail.com', 22222222),
//     new User(3, 'user3', 'surname3', 'user3@gmail.com', 33333333),
//     new User(4, 'user4', 'surname4', 'user4@gmail.com', 44444444),
//     new User(5, 'user5', 'surname5', 'user5@gmail.com', 55555555),
//     new User(6, 'user6', 'surname6', 'user6@gmail.com', 66666666)
// ];

// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
// const filteredById = users.filter((user) => user.id % 2 === 0);
// console.log(filteredById);

// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// const sortedById = users.sort((a, b) => b.id - a.id);
// console.log(sortedById);

// - Створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// -- Створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// const clients = [
//     new Client(1, 'max', 'maxim', 'max@gmail.com', 11111, ['milk', 'bread', 'apple', 'banana']),
//     new Client(2, 'olya', 'olyga', 'olya@gmail.com', 2222, ['banana', 'sugar']),
//     new Client(3, 'roma', 'roman', 'roma@gmail.com', 3333, ['flour', 'eggs', 'milk', 'coconut', 'sugar']),
//     new Client(4, 'anya', 'anna', 'anya@gmail.com', 4444, ['coconut', 'bread', 'rice']),
//     new Client(5, 'vanya', 'ivan', 'vanya@gmail.com', 5555, ['butter', 'bread', 'sausage', 'tomato']),
//     new Client(6, 'sim', 'simon', 'sim@gmail.com', 6666, ['milk', 'pepsi'])
// ];

// - Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
// const sortedByOrder = clients.sort((a, b) => b.order.length - a.order.length);
// console.log(sortedByOrder);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. Додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function CarCreator(model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function () {
//         console.log(`Model - ${this.model}, Producer - ${this.producer}, Year - ${this.year}, Max speed - ${this.maxSpeed}, Volume - ${this.volume}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed
//         console.log(`Максимальна швидкість була змінена на ${newSpeed}`)
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue
//         console.log(`Рік випуску був змінений на ${newValue}`)
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
//
// const car = new CarCreator('r63', 'Toyota', 2024, 699, 70);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(800);
// car.changeYear(2000);
// car.addDriver({name: 'dingus', age: 52, examFails: 42});
// console.log('-------------- AFTER CHANGE -----------');
// console.log(car);

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class CarCreator {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info() {
//         console.log(`Model - ${this.model}, Producer - ${this.producer}, Year - ${this.year}, Max speed - ${this.maxSpeed}, Volume - ${this.volume}`)
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed
//         console.log(`Максимальна швидкість була змінена на ${newSpeed}`)
//     }
//     changeYear(newValue) {
//         this.year = newValue
//         console.log(`Рік випуску був змінений на ${newValue}`)
//     }
//     addDriver(driver) {
//         this.driver = driver
//     }
// }
//
// const car = new CarCreator('Camry', 'Toyota', 2021, 280, 3)
// console.log(car);
//
// car.drive()
// car.info();
// car.increaseMaxSpeed(320);
// car.changeYear(2024);
// car.addDriver({name: 'might', age: 3, examFails: 3});
// console.log(car);

// - Створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// -- Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// -- Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// class Prince {
//     constructor(name, age, bootSize) {
//         this.name = name;
//         this.age = age;
//         this.bootSize = bootSize;
//     }
//
//     findByFootSize1(arr) {
//         for (const item of arr) {
//             if (item.footSize === this.bootSize) {
//                 return item
//             }
//         }
//     }
//
//     findByFootSize2(arr) {
//         return arr.find((value) => value.footSize === this.bootSize);
//     }
// }
//
// const cinderellas = [
//     new Cinderella('Anna', 24, 40),
//     new Cinderella('Olya', 22, 35),
//     new Cinderella('Mina', 27, 28),
//     new Cinderella('Katya', 21, 34),
//     new Cinderella('Marina', 30, 40),
//     new Cinderella('Lilya', 20, 36)
// ];
// const prince = new Prince('Romeo', 21, 36);
//
// const cinderella1 = prince.findByFootSize1(cinderellas);
// console.log(cinderella1);
//
// const cinderella2 = prince.findByFootSize2(cinderellas);
// console.log(cinderella2);