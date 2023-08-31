'use strict';

let num = 50;

// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while(num <55);

// переменная; условие когда цикл закончится; действие; 
for (let i = 1; i < 8; i++) {
	console.log(i);
	console.log(num);
	num++;
}

for (let i = 1; i < 8; i++) {
	if (i === 6) {
		break;// прерывание
	}
	console.log(i);
}

for (let i = 1; i < 8; i++) {
	if (i === 6) {
		continue;// был пропущен шаг (i === 6), цикл продолжился
	}
	console.log(i);
}

for (let i = 0; i < 3; i++) {
	console.log(i);
	for (let j = 0; j < 3; j++) {
		console.log('j = ' + j);
	}
}

let result = '';
const lenght = 10;

for (let i = 1; i < lenght; i++) {

	for (let j = 0; j < i; j++) {
		result += '*';
	}

	result += '\n';//вывод и перенос
}

console.log(result);


first: for (let i = 0; i < 3; i++) {
	console.log('First level: ${i}');
	for (let j = 0; j < 3; j++) {
		console.log('Second level: ${j}');
		for (let k = 0; k < 5; k++) {
			if (k === 2) continue first;//ограничили k === 2; по метке first
			console.log('Third level: ${k}');
		}
	}
}

first: for (let i = 0; i < 3; i++) {
	console.log('First level: ${i}');
	for (let j = 0; j < 3; j++) {
		console.log('Second level: ${j}');
		for (let k = 0; k < 5; k++) {
			if (k === 2) break first;//остановка процесса по метке first
			console.log('Third level: ${k}');
		}
	}
}

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');//prompt - вопрос пользователю

const personalMovieDB = {
	count: number0fFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

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

if (personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}

console.log(personalMovieDB);


let num1 = 20;

function showFirstMessage(text) {
	console.log(text);
	let num1 = 10;
	console.log(num1);
}

showFirstMessage('It is First Message');
console.log(num1);


// function calc(a,b){
// 	return(a+b);
// }

// console.log(calc(4,3));
// console.log(calc(45,6));
// console.log(calc(4,66));


function ret() {
	let num = 50;
	//
	//
	//
	return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
	console.log('Hello');
};

logger();


// eslint-disable-next-line no-unused-vars
const calc = (a, b) => {
	console.log('1');
	return a + b;
};

const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
	console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);

