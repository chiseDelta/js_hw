// - Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сесію
const sessionsList = localStorage.getItem('sessions');
const data = sessionsList ? JSON.parse(sessionsList) : [];

data.push({date: new Date()});

localStorage.setItem('sessions', JSON.stringify(data));