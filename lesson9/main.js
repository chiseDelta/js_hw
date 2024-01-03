// - Створити блок,
// - Додати йому класи wrap, collapse, alpha, beta
// - Додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - Додати цей блок в body.
// - Клонувати його повністю, та додати клон в body.
const block = document.createElement('div');

block.classList.add('wrap', 'collapse', 'alpha', 'beta');

block.style.backgroundColor = '#8cb8ff';
block.style.color = 'snow';
block.style.fontSize = '24px';

block.innerText = `Hello World!`;

document.body.appendChild(block);

const copyBlock = block.cloneNode(true);
document.body.appendChild(copyBlock);

// - Є масив:
// -- Зробити ul в середині якої будуть лежати елементи масиву (кожен у своєму li)
const array = ['Main', 'Products', 'About us', 'Contacts'];
const ul = document.createElement('ul');

for (const item of array) {
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}

document.body.appendChild(ul);

// - Є масив:
// -- Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// -- Завдання робити через цикли.

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    const h1 = document.createElement('h1');
    h1.innerText = course.title;
    h1.style.backgroundColor = '#275bb4';
    h1.style.color = 'snow';

    const p = document.createElement('p');
    p.innerText = `${course.monthDuration} місяців`;

    document.body.append(h1, p);
}

// - Є масив:
// -- За допомоги скріпта для кожного елементу масиву зробити <div class='item'>, в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// -- Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    const divItem = document.createElement('div');
    divItem.className = 'item';

    const h1 = document.createElement('h1');
    h1.className = 'heading';
    h1.innerText = `${course.title}`;
    h1.style.backgroundColor = '#27b49a';
    h1.style.color = 'snow';

    const p = document.createElement('p');
    p.className = 'description';
    p.innerText = `${course.monthDuration} місяців`;

    divItem.append(h1, p);
    document.body.appendChild(divItem);
}

// - Є масив:
// -- Проітерувати його, створивши для кожного об'єкту масиву <div class='member'> та наповнити його данними з об'єкту.
// -- Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
const simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
for (const simpson of simpsons) {
    const divItem = document.createElement('div');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    const img = document.createElement('img');

    divItem.className = 'member';

    h4.innerText = `Name: ${simpson.name} ${simpson.surname}. Age: ${simpson.age}`;

    p.innerText = `Info: ${simpson.info}`;

    img.src = `${simpson.photo}`;
    img.alt = `${simpson.name} ${simpson.surname}`;

    divItem.append(h4, p, img);
    document.body.appendChild(divItem);
}

// - Є масив:
// -- Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// -- Приклад структури знаходиться у файлі example.png який лежить в папці з поточним файлом
// Цикл в циклі
const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {
    const divItem = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const ol = document.createElement('ol');

    for (const module of course.modules) {
        const li = document.createElement('li');
        li.innerText = module;
        ol.appendChild(li);
    }

    h2.innerText = `${course.title}`;
    p.innerText = `${course.monthDuration} місяців // ${course.hourDuration} годин`

    divItem.append(h2, p, ol);
    document.body.appendChild(divItem);
}