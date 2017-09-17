/**
 * 2017-9-16 zhengkun
 */


 var f = function(){
     return function(x,y){
         return x+y
     }
 }

 var b = f();
 var c = b(1,2);
 var d = f();
 console.log(c);

 var f
b.f = 'gg';
d.f = 'jj';
console.log(b.f,d.f);
console.log(f()(3,2));
