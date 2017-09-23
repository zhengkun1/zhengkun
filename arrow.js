/**
 * 2017-9-23 zhengkun
 */

var x = (app) => {
    this.age = 10
};
x();
console.log(typeof x.prototype);
//var a = new  x;
//console.log(typeof a.prototype);
console.log(x.age, this.age);
