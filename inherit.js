/**
 * 2017-9-22 zhengkun
 */

/*
function animal(){};
function cat (){};
function dog(){};
function mouse(){};

cat.prototype = animal.prototype;
cat.prototype.constructor = cat;
dog.prototype = animal.prototype;
dog.prototype.constructor = dog;
dog.prototype.food = 'wanghuajian'
cat.prototype.lifestyle = 'alive'
var a = new dog();
console.log(a.food);
console.log(cat.prototype.food);
console.log(a.lifestyle);


function f(){};
f.prototype = animal.prototype;
mouse.prototype = new f();
mouse.prototype.constructor = mouse;
mouse.prototype.haha = 'haha'
var c = new mouse;
console.log(mouse.prototype.food);
console.log(c.food);
console.log(c.haha);*/

/*
function animal(){
    this.species = 'mammal'
};
animal.prototype.species = 'mammal';
function cat(name){
    animal.apply(this,arguments)
    this.name
};
var a = new cat();
console.log(a);
*/

function  extend2(child,parent){
    var p = parent.prototype;
    var c = child.prototype;
    for(var i in p){
        c[i] = p [i]
    }
    c.uber = p
};
