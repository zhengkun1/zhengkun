/**
 * 2017-9-16 zhengkun
 */

var a = function(x){
    var age = 1;
    return function(){
        var haha = {
            heiheihei  : age 
        }
        age += x;
        return haha;
    };
};

var b = a(2);
console.log(b(),b(),b());