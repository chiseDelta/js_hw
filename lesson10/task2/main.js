// - Є сторінка, на якій є блок, в якому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
const html = document.getElementById('count');
const value1 = localStorage.getItem('counter') ?? 0;
const value2 = parseInt(value1) + 1;

html.innerText = value2;
localStorage.setItem('counter', value2);