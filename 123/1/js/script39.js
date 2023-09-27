'use strict';

//1)строка
console.log(typeof (String(null)));
console.log(typeof (String(4)));

//2) при сложении со строкой получается строка
console.log(typeof (5 + ''));

const num = 5;
console.log('http://vk.com/catalog' + num);

// 3)
// const fontSize = 26 + 'px';


//To number 

//1)
console.log(typeof(Number('4')));

//2)
console.log(typeof(+'5'));

//3)
console.log(typeof(parseInt('15px', 10)));

//4)
// let answ = +prompt('Hello', '');

//To boolean

// always false
0, '', null, undefined, NaN;


let switcher = null;

if (switcher){
	console.log('Working...');
}


switcher = 1;

if (switcher){
	console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'44444'));
