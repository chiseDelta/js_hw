// - Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const form = document.forms.f1; // HTML - 12 Line ( <form> )

form.onsubmit = function (ev) {
    ev.preventDefault()
    const userBlock = document.createElement('h3');

    userBlock.innerText = `Name: ${this.name.value},
    Surname: ${this.surname.value},
    Age: ${this.age.value}`;

    this.name.value = '';
    this.surname.value = '';
    this.age.value = '';

    document.body.appendChild(userBlock);
}