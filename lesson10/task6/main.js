// - Створити input який приймає вік людини та кнопку яка підтверджує дію. При натисканні на кнопку зчитати інформацію з input та перевірити вік чи менше він ніж 18, та повідомити про це користувача
const form = document.forms.ageForm // HTML - 12 Line ( <form> )

form.onsubmit = function (ev) {
    ev.preventDefault();

    if (parseInt(this.age.value) < 18) {
        alert('Cartoons')
    } else if (parseInt(this.age.value) >= 70) {
        alert('No beer :(')
    } else {
        alert('Beer >:)')
    }
}