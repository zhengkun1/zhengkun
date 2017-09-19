/**
 * 2017-9-17 zhengkun
 */

var a = {};
var c = {   };
var b = function(){
    this.name = 20  ;
}
console.log(b.apply(a),a);
console.log(b.apply(c),c);
