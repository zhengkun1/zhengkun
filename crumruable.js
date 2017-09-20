/**
 * 2017-9-20  zhengkun
 */


var a = Object.create(null,{
    age : {
        value : 123, 
        writable: true,
        configurable : true ,
        enumerable : false
    },
    name : {
        value : '100k',
        writable : false,
        configurable : true,
        enumerable : true
    },
});
console.log(a.age,a.name);
console.log(a);
var k = Object.create(a,{});
console.log(k.name);

var y = 11111;
Number.prototype.getName = {
    name :'aaaaa'
};
console.log(y.getName);

//Object.freeze(a);

//delete a.name;
//console.log(a);

Object.seal(a);
a.age = 11113214;
a.name = 'afadfasdfr'
console.log(a.age,a.name);

