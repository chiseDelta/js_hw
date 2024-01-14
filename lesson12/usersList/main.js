// - Зробити файл users.html
// - З ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// - Вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - ID юзера)
// - При кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX (ХХХ - id користувача)
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const user of value) {
            const div = document.createElement('div');
            const button = document.createElement('button');

            div.innerText = `${user.id}, ${user.name} `;
            div.className = 'wrap';
            button.innerText = 'Details';

            div.appendChild(button);
            document.body.appendChild(div);

            button.onclick = function () {
                location.href = `../usersInfo/index.html?userId=${user.id}`
            }
        }
    })