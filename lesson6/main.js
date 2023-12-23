// - Знайти та вивести довжину наступних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'
// const arr = ['hello world', 'lorem ipsum', 'javascript is cool'];
// arr.map((str) => console.log(str.length));

// - Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
// const arr = ['hello world', 'lorem ipsum', 'javascript is cool'];
// arr.map((str) => console.log(str.toUpperCase()))

// - Перевести до нижнього регістру наступні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// const capsArr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// capsArr.map((str) => console.log(str.toLowerCase()));

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// const str = ' dirty string   ';
// console.log(str.substring(1, 13));
// // Faster Way
// console.log(str.trim());

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// const string = 'Ревуть воли як ясла повні';
// const stringToArray = (str) => str.split(' ');
// const arr = stringToArray(string);
// console.log(arr);

// - Є масив чисел [10, 8, -7, 55, 987, -1011, 0, 1050, 0]. За допомоги map перетворити всі об'єкти в масиві на стрінгові.
// const arrOfNum = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// const arrOfStr = arrOfNum.map((num) => num.toString());
// console.log(arrOfStr)

// - Створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
// const nums = [11,21,3];
// const sortNums = (arrOfNum, direction) => {
//     switch (direction) {
//         case 'ascending':
//             return arrOfNum.sort((a, b) => a - b);
//         case 'descending':
//             return arrOfNum.sort((a, b) => b - a);
//     }
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

// - Є масив courses:
//   -- Відсортувати його за спаданням за monthDuration
//   -- Відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
//   -- За допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration}
// const courses = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const sort1 = courses.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sort1);
// const sort2 = courses.filter(value => value.monthDuration > 5);
// console.log(sort2);
// const sort3 = courses.map((value, index) => ({...value, id: index + 1}))
// console.log(sort3);

// - Описати колоду карт (від 6 до туза без джокерів)
//   -- Знайти піковий туз
//   -- Всі шістки
//   -- Всі червоні карти
//   -- Всі буби >:)
//   -- Всі трефи від 9 та більше
//   -- Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// const cards = [
//     {cardSuit: 'spade', value: 6, color: 'black'},
//     {cardSuit: 'spade', value: 7, color: 'black'},
//     {cardSuit: 'spade', value: 8, color: 'black'},
//     {cardSuit: 'spade', value: 9, color: 'black'},
//     {cardSuit: 'spade', value: 10, color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'diamond', value: 6, color: 'red'},
//     {cardSuit: 'diamond', value: 7, color: 'red'},
//     {cardSuit: 'diamond', value: 8, color: 'red'},
//     {cardSuit: 'diamond', value: 9, color: 'red'},
//     {cardSuit: 'diamond', value: 10, color: 'red'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'diamond', value: 'queen', color: 'red'},
//     {cardSuit: 'diamond', value: 'king', color: 'red'},
//     {cardSuit: 'heart', value: 6, color: 'red'},
//     {cardSuit: 'heart', value: 7, color: 'red'},
//     {cardSuit: 'heart', value: 8, color: 'red'},
//     {cardSuit: 'heart', value: 9, color: 'red'},
//     {cardSuit: 'heart', value: 10, color: 'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'clubs', value: 6, color: 'black'},
//     {cardSuit: 'clubs', value: 7, color: 'black'},
//     {cardSuit: 'clubs', value: 8, color: 'black'},
//     {cardSuit: 'clubs', value: 9, color: 'black'},
//     {cardSuit: 'clubs', value: 10, color: 'black'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
// ]
// const findSpade = cards.find((card) => card.cardSuit === 'spade' && card.value === 'ace');
// console.log(findSpade);
// const allSix = cards.filter((card) => card.value === 6);
// console.log(allSix);
// const allRed = cards.filter((card) => card.color === 'red');
// console.log(allRed);
// const allBooba = cards.filter((card) => card.cardSuit === 'diamond');
// console.log(allBooba);
// const allTreff = cards.filter((card) => [9, 10, 'ace', 'jack', 'queen', 'king'].includes(card.value));
// console.log(allTreff);
// const cardBox = cards.reduce((acc, card) => {
//     switch (card.cardSuit) {
//         case 'spade':
//             acc.spades.push(card);
//             break
//         case 'diamond':
//             acc.diamonds.push(card);
//             break
//         case 'heart':
//             acc.hearts.push(card);
//             break
//         case 'clubs':
//             acc.clubs.push(card);
//             break
//         default:
//             console.log('ERROR')
//     }
//     return acc
// }, {spades: [], diamonds: [], hearts: [], clubs: []})
// console.log(cardBox);

// - Взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//   -- Написати пошук всіх об'єктів, в який в modules є sass
//   -- Написати пошук всіх об'єктів, в який в modules є docker
// const coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// const findSass = coursesArray.filter((item) => item.modules.includes('sass'))
// console.log(findSass);
// const findDocker = coursesArray.filter((item) => item.modules.includes('docker'))
// console.log(findDocker);