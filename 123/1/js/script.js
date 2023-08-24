'use strict';// строгий,современный язык(пишется в начале)

let number = 5;// можно изменить
// eslint-disable-next-line no-unused-vars
const leftBorderWidth = 1;// сложно изменить

number = 10;
console.log(number);

var name = 'Ivan';
name = 'Alex';
console.log(name);

let result = 60;
console.log(result);


// Чем понятнее переменная тем лучше
const vehicleBodyWidth = 5000;
const vehicleBodyLenght = 4000;

console.log('Ширина кузова авто: ' + vehicleBodyWidth + ', длина: ' + vehicleBodyLenght);

//snake_case
// UPPER_SNAKE_CASE
// в ввиде конст можно задавать как выше 
//Kebab-case
//PascalCase

// eslint-disable-next-line no-unused-vars
let COLOR_RED = '#F00';

//обьект obj - скобки {}, элементы парные - ключ: значение
const obj = {
	name1: 'John',
	age: 25,
	isMarried: false
};

console.log(obj.age);

//maccив arr - квадратные скобки, элементы по порядку
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);// 'orange.jpg' т.к. нумерация идет с 0

// eslint-disable-next-line no-unused-vars
let storeName = ('Vkusvill');
// eslint-disable-next-line no-unused-vars
let storeDescription = {
	budget: 10000,
	employees: ['Ivan', 'Alex', 'John'],
	products: {
		product1: 100,
		product2: 200,
	},
	open: true
};

alert('123');

let message1;
message1 = 'Hello!';
alert(message1); // показывает содержимое переменной