/*
* 2017.9.14    ZhengKun
*/

var arr = [1,2,3,4,5];

var a = arr.map(function(e) {
    return 3 * e;
})
console.log(a);


var a = arr.filter(function(b){
    return b >= 2;
})
console.log(a);

var a = arr.reduce(function(ab,bb){
    return ab + bb;
})
console.log(a);

var a = arr.every(function(item){
    return item > 0;
})
console.log(a);

var a = arr.some(function(item){
     return item > 4;
})
console.log(a);
