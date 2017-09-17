/**
 * 2017.9.16   zhengkun
 */

var a = function(){
    return function(x){
        return x+2
    }
};

var b = a();
var c = b(1);
console.log(c);