/**
 * 2017 9 17  zhengkun
 */

/*

var obj = {
    a:1,
    add:function(x){
        return function(){
            console.log(`this.a -> ${this.a}`)
            return this.a+x;
        }
    }
};
console.log(obj.add(3)());
setTimeout(obj.add(3),10000);

*/

var obj = {
    a:1,
    add : function(x){
        this.b = 2;
        this.c = 4;
        return this.a + x;

    }
};
console.log(obj.add(4),obj.b,obj.c);

