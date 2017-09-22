/**
 * 2017-9-20 zhengkun
 */


function animal(){};
animal.prototype = {
    live : true,
    canrun : false,
    m : function(){
        console.log('animal.m')}
};

function ying(){};
ying.prototype = {
    livedin :  'sky'
};
ying.prototype.__proto__ = bird.prototype;
var a = new ying();
function tuoniao(){};
tuoniao.prototype = {
    eatwhat : 'meat'
} ;
var b = new tuoniao();
function shark(){};
shark.prototype = {
    howtolive : 'eatfood'
};
shark.prototype.__proto__ = fish.prototype;
var c = new shark();
function jingyu(){};
jingyu.prototype = {
    tixing : 'big'
};
jingyu.prototype.__proto__ = fish.prototype;
var d = new jingyu();


var k = Object.create(Function.prototype,[]);
console.log(typeof k);
console.log(d.canrun);
console.log(d.livedin)
d.m();
c.eat();
