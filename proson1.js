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
    return this.age+1
};
console.log(kun.setName());
console.log(zheng.getName());
console.log(zheng.getAge());
console.log(kun.getAge());
