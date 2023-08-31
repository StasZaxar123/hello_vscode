/* eslint-disable no-unused-vars */
const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');//prompt - вопрос пользователю

const personalMovieDB = {
	count: number0fFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
	b = prompt('На сколько оцените его?', ''),
	c = prompt('Один из последних просмотренных фильмов?', ''),
	d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



//20

// eslint-disable-next-line no-constant-condition
if (4 == 9) {
	console.log('Ok');
} else {
	console.log('Error');
}


const num = 50;


if (num < 49) {
	console.log('Error');
} else if (num > 100) {
	console.log('Much');
} else {
	console.log('Ok');
}

(num === 50) ? console.log('Ok') : console.log('Error');



// const num1 = 50;

// switch (num1) {
// case 49:
// 	console.log('Error');
// 	break;
// case 100:
// 	console.log('Error');
// 	break;
// case 50:
// 	console.log('Error');
// 	break;
// default:
// 	console.log('Не в этот раз');
// 	break;
// }





//&& оператор И
// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries){
// 	console.log('Я сыт!');
// }

// console.log((hamburger && fries));

// console.log (1 && 0);
// console.log (1 && 5);
// console.log (null && 5);
// console.log ('argag' && 0);

// const hamburger = 3;
// const fries = 0;
// const cola = 1;

// console.log(hamburger === 3 && fries  && cola);

// if (hamburger === 3 && fries === 1 && cola === 1) {
// 	console.log('Все сыты!');
// } else {
// 	console.log('Мы уходим');
// }

// || или
console.log(hamburger || fries || cola);

const hamburger = 3;
const fries = 0;
const cola = 1;
const nuggets = 2;

if (hamburger === 3 && fries === 1 || cola === 1 && nuggets === 2) {
	console.log('Все довольны!');
} else {
	console.log('Мы уходим');
}
console.log(hamburger === 3 && fries === 1 || cola === 1 && nuggets);// вернет 1 true -> 2

console.log(hamburger || fries || cola);

let johnReport, samReport, mariaReport = 'done';
console.log(johnReport || samReport || mariaReport);

// Порядок операторов!

// 2 false 1 