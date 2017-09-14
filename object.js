/*
* 2017.9.14 zhengkun 
*/

var object = {
    boolean : true,
    number : 1234,  
    func : function(){
        console.log(`boolean=> ${this.boolean}  number=> ${this.number}  func=> ${this.func}`)
     }
};
object.func()
