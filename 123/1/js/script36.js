'use strict';

let str = 'some';
// eslint-disable-next-line no-unused-vars
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3,]);

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function(){
		console.log('Hello');
	}
};

const jonh = Object.create(soldier);

jonh.sayHello();
// const jonh = {
// 	health: 100,
// };

// jonh._proto_ = soldier;

Object.setPrototypeOf(jonh, soldier);

// console.log(jonh);
