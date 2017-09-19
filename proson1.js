/**
 * 2017-9-17 zhengkun
 */


var person = function(age){
    this.age = age
}

var zheng= new person(20);
var kun = new person(10);
person.prototype.getAge = function (){
    return this.age;
};
zheng.getName = function(){
    return this.age
};
kun.setName = function(){
    return this.age
};
//console.log(zheng.setName());
//console.log(kun.getName());
console.log(zheng.getName);
console.log(typeof zheng.getName);
console.log(person.__proto__ ===   Function.prototype);
console.log(zheng.getName.__proto__ === Function.prototype);
console.log(kun.setName.__proto__ === Function.prototype);


console.log(kun.setName());
console.log(zheng.getName());

