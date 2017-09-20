/**
 * 2017-9-17 zhengkun
 */



var person = {
    age : 21,
    name : 'hahahahahahaha'
};
var i = {
    age : 10
}
var a = Object.create(person,{
    age : {
        value :20  
    }
});
var b = Object.create(person,{});
console.log(a.age,b.age);
console.log(a.__proto__);



var l =[1,2,3]
var p ='hahaha'
console.log(typeof l,typeof p);
console.log(l.__proto__);
console.log(p.__proto__);
console.log(l.__proto__.__proto__ === Object.prototype);
console.log(l.__proto__ === Array.prototype);
console.log(p.__proto__.__proto__ === Object.prototype);
console.log(p.__proto__ === String.prototype);

var number = 12345
var boolean = true 
console.log(typeof number,typeof boolean);
console.log(typeof number.__proto__.__proto__,typeof boolean.__proto__);
console.log(number.__proto__.__proto__ === Object.prototype);
console.log(number.__proto__ === Number.prototype);
console.log(boolean.__proto__.__proto__ === Object.prototype);
console.log(boolean.__proto__ === Boolean.prototype);

