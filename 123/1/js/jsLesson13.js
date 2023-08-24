'use strict';

alert('Hello');

const result = confirm('Are you here?');
console.log(result);

const answer = prompt('Вам есть 18?', '18');
console.log(typeof (answer));

// eslint-disable-next-line no-unused-vars
const answers = [];
answer[0] = prompt('Как ваше имя?', '');
answer[1] = prompt('Какая ваша фамилия?', '');
answer[2] = prompt('Сколько вам лет?', '');

document.write(answer);
console.log(answer);

const category = 'toys';
console.log(`https://123.com/${category}/5`);

const user = 'Ivan';

alert(`Привет,${user}`);

