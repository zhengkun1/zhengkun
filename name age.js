/**
 * 2017-9-16 zhengkun
 */
var counter = 1;
var a = function() {
    var b =  {
        age:counter++
    }

    return b;
}

console.log(a(), a());


var b = function(){
    return function(x){
        return 2+x
    }
}

console.log(a(),a(),a());