/*
 * 2017-9-18 zhengkun
 */


console.log(`typeof Function => ${typeof Function}`);
console.log(`typeof Object => ${typeof Object}`);
console.log(`typeof Object.prototype => ${typeof Object.prototype}`);
console.log(`typeof Function.prototype => ${typeof Function.prototype} `);
console.log(`typeof Object.proto ===typeof Function.proto  => ${Object.__proto__ === Function.__proto__}`);
console.log(`typeof Functioin => ${typeof Function.prototype.__proto__}`);
console.log(`typeof Object.prototype === typeof Function.proto  =>${Object.prototype ===Function.prototype.__proto__}`);
console.log(`typeof Object.proto => ${typeof Object.__proto__}`);



var car = function(){

}
console.log(`typeof car =>${typeof car.__proto__}`);
console.log(`typeof car === type Function => ${car.__proto__ === Function.__proto__}`);
console.log(`typeof object => ${Object.prototype.__proto__}`)
console.log(`typeof Function__proto__ === Function.prototype  => ${Function.__proto__ ===Function.prototype}`);