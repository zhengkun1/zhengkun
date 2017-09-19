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
