/**
 * 2017-9-16 zhengkun
 */

 var a = function(x){
     var d = 2
     var f = 2
     return function(y){
         return y / x /d
     }
 }

 var b = a(5);
 var c = b(20);
     console.log(c);