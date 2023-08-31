'use strict';

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
		const a = prompt('Один из последних просмотренных фильмов?', '').trim(),//метод triam убирает пробелы до,после
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





function first() {
	//do something
	setTimeout(function () {
		console.log(1);
	}, 500);
}

function second() {
	console.log(2);
}

first();
second();



function learnJS(lang, callback) {
	console.log(`Я учу: ${lang}`);
	callback();
}

function done() {
	console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);
