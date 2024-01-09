// - Зробити масив на 100 об'єктів та дві кнопки prev next
// - При завантажені сторінки з'являються перші 10 об'єктів.
// - При натисканні next виводяться наступні 10 об'єктів
// - При натисканні prev виводяться попередні 10 об'єктів
const users = [
    {
        "name": "Jack",
        "age": 29,
        "status": true
    },
    {
        "name": "Charlie",
        "age": 33,
        "status": true
    },
    {
        "name": "Ivy",
        "age": 32,
        "status": true
    },
    {
        "name": "David",
        "age": 35,
        "status": true
    },
    {
        "name": "Jack",
        "age": 36,
        "status": false
    },
    {
        "name": "Alice",
        "age": 20,
        "status": true
    },
    {
        "name": "Charlie",
        "age": 46,
        "status": false
    },
    {
        "name": "Bob",
        "age": 47,
        "status": true
    },
    {
        "name": "Charlie",
        "age": 51,
        "status": true
    },
    {
        "name": "Jack",
        "age": 42,
        "status": true
    },
    {
        "name": "Charlie",
        "age": 29,
        "status": false
    },
    {
        "name": "David",
        "age": 58,
        "status": true
    },
    {
        "name": "David",
        "age": 23,
        "status": false
    },
    {
        "name": "David",
        "age": 40,
        "status": true
    },
    {
        "name": "Charlie",
        "age": 37,
        "status": true
    },
    {
        "name": "Frank",
        "age": 47,
        "status": true
    },
    {
        "name": "Grace",
        "age": 54,
        "status": false
    },
    {
        "name": "Ivy",
        "age": 26,
        "status": true
    },
    {
        "name": "David",
        "age": 30,
        "status": false
    },
    {
        "name": "Henry",
        "age": 38,
        "status": true
    },
    {
        "name": "Frank",
        "age": 29,
        "status": false
    },
    {
        "name": "Frank",
        "age": 49,
        "status": false
    },
    {
        "name": "Charlie",
        "age": 24,
        "status": true
    },
    {
        "name": "Ivy",
        "age": 42,
        "status": true
    },
    {
        "name": "Charlie",
        "age": 31,
        "status": false
    },
    {
        "name": "David",
        "age": 41,
        "status": false
    },
    {
        "name": "Charlie",
        "age": 58,
        "status": true
    },
    {
        "name": "Eva",
        "age": 29,
        "status": true
    },
    {
        "name": "Alice",
        "age": 23,
        "status": false
    },
    {
        "name": "Grace",
        "age": 30,
        "status": true
    },
    {
        "name": "Bob",
        "age": 51,
        "status": true
    },
    {
        "name": "Jack",
        "age": 23,
        "status": true
    },
    {
        "name": "Eva",
        "age": 24,
        "status": false
    },
    {
        "name": "Grace",
        "age": 27,
        "status": true
    },
    {
        "name": "Henry",
        "age": 53,
        "status": false
    },
    {
        "name": "Frank",
        "age": 57,
        "status": true
    },
    {
        "name": "Frank",
        "age": 44,
        "status": true
    },
    {
        "name": "Alice",
        "age": 35,
        "status": true
    },
    {
        "name": "Frank",
        "age": 45,
        "status": true
    },
    {
        "name": "Jack",
        "age": 36,
        "status": false
    },
    {
        "name": "Henry",
        "age": 56,
        "status": false
    },
    {
        "name": "Henry",
        "age": 56,
        "status": true
    },
    {
        "name": "Frank",
        "age": 38,
        "status": false
    },
    {
        "name": "Jack",
        "age": 46,
        "status": true
    },
    {
        "name": "Ivy",
        "age": 23,
        "status": false
    },
    {
        "name": "Frank",
        "age": 45,
        "status": false
    },
    {
        "name": "Henry",
        "age": 55,
        "status": false
    },
    {
        "name": "Eva",
        "age": 36,
        "status": true
    },
    {
        "name": "Charlie",
        "age": 25,
        "status": true
    },
    {
        "name": "Grace",
        "age": 41,
        "status": true
    },
    {
        "name": "Grace",
        "age": 44,
        "status": false
    },
    {
        "name": "Bob",
        "age": 55,
        "status": true
    },
    {
        "name": "Ivy",
        "age": 43,
        "status": true
    },
    {
        "name": "Grace",
        "age": 59,
        "status": true
    },
    {
        "name": "Alice",
        "age": 40,
        "status": true
    },
    {
        "name": "Grace",
        "age": 33,
        "status": true
    },
    {
        "name": "Frank",
        "age": 40,
        "status": true
    },
    {
        "name": "Henry",
        "age": 38,
        "status": true
    },
    {
        "name": "Eva",
        "age": 37,
        "status": false
    },
    {
        "name": "Jack",
        "age": 47,
        "status": false
    },
    {
        "name": "Grace",
        "age": 59,
        "status": true
    },
    {
        "name": "Henry",
        "age": 43,
        "status": true
    },
    {
        "name": "David",
        "age": 57,
        "status": true
    },
    {
        "name": "Jack",
        "age": 39,
        "status": false
    },
    {
        "name": "Frank",
        "age": 40,
        "status": true
    },
    {
        "name": "Bob",
        "age": 33,
        "status": false
    },
    {
        "name": "Eva",
        "age": 25,
        "status": false
    },
    {
        "name": "David",
        "age": 31,
        "status": true
    },
    {
        "name": "Eva",
        "age": 44,
        "status": true
    },
    {
        "name": "Eva",
        "age": 42,
        "status": false
    },
    {
        "name": "Grace",
        "age": 44,
        "status": true
    },
    {
        "name": "Henry",
        "age": 22,
        "status": false
    },
    {
        "name": "Ivy",
        "age": 27,
        "status": false
    },
    {
        "name": "Grace",
        "age": 30,
        "status": false
    },
    {
        "name": "Grace",
        "age": 35,
        "status": false
    },
    {
        "name": "Bob",
        "age": 59,
        "status": false
    },
    {
        "name": "Grace",
        "age": 28,
        "status": true
    },
    {
        "name": "Charlie",
        "age": 32,
        "status": true
    },
    {
        "name": "Ivy",
        "age": 21,
        "status": true
    },
    {
        "name": "Eva",
        "age": 38,
        "status": true
    },
    {
        "name": "Eva",
        "age": 49,
        "status": true
    },
    {
        "name": "Ivy",
        "age": 54,
        "status": true
    },
    {
        "name": "Frank",
        "age": 24,
        "status": false
    },
    {
        "name": "Frank",
        "age": 21,
        "status": false
    },
    {
        "name": "Frank",
        "age": 24,
        "status": false
    },
    {
        "name": "Ivy",
        "age": 40,
        "status": true
    },
    {
        "name": "Henry",
        "age": 52,
        "status": true
    },
    {
        "name": "Charlie",
        "age": 52,
        "status": true
    },
    {
        "name": "Charlie",
        "age": 21,
        "status": true
    },
    {
        "name": "Eva",
        "age": 30,
        "status": true
    },
    {
        "name": "Charlie",
        "age": 58,
        "status": false
    },
    {
        "name": "David",
        "age": 58,
        "status": true
    },
    {
        "name": "Frank",
        "age": 31,
        "status": false
    },
    {
        "name": "Jack",
        "age": 49,
        "status": true
    },
    {
        "name": "Frank",
        "age": 48,
        "status": true
    },
    {
        "name": "Alice",
        "age": 43,
        "status": false
    },
    {
        "name": "David",
        "age": 33,
        "status": false
    },
    {
        "name": "Henry",
        "age": 48,
        "status": true
    },
    {
        "name": "Bob",
        "age": 34,
        "status": false
    },
    {
        "name": "Frank",
        "age": 26,
        "status": false
    }
];

const userBlock = document.getElementById('userBlock');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

const buttonStatus = () => {
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex + 10 >= users.length;
}

const displayUsers = (startIndex) => {
    userBlock.innerHTML = '';

    for (let i = startIndex; i < startIndex + 10; i++) {
        if (users[i]) {
            const div = document.createElement('div');
            div.innerText = `Name: ${users[i].name}, Age: ${users[i].age}, Status: ${users[i].status}`;
            userBlock.appendChild(div);
        }
    }

    buttonStatus();
}

displayUsers(currentIndex);

nextBtn.addEventListener('click', () => {
    if (currentIndex + 10 < users.length) {
        currentIndex += 10;
        displayUsers(currentIndex);
    }
})
prevBtn.addEventListener('click', () => {
    if (currentIndex - 10 >= 0) {
        currentIndex -= 10;
        displayUsers(currentIndex);
    }
})
