'use strict';

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
	return curr * amount;
}

function promotion(result) {
	console.log(result * discount);
}

const res = (convert(500, usdCurr));
promotion(res);



function test() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
		if (i === 3) return;
	}
	console.log('Done');
}

test();

const str = 'test';
const arr = [1, 2, 4];

console.log(str.length);
console.log(arr.length);

console.dir();// ввод в консоль: например Number выдас все методы для работы с ним

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));



const logg = 'Hello world';

console.log(logg.slice(6, 10));// вырезать
console.log(logg.substring(6, 10));
console.log(logg.substr(6, 5));


const num = 12.2;
console.log(Math.round(num));//округление


const test1 = '12.2px';
console.log(parseInt(test1));
console.log(parseFloat(test1));


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

let number0fFilms;//prompt - вопрос пользователю

function start() {
	number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
		number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: number0fFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько оцените его?', '');
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}
detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i - 1] = genre;//i - 1 т.к. массив начинается с 0, нам нужно начать с 1
	}
}
writeYourGenres();

console.log(personalMovieDB);
