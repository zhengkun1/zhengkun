/**
 * 2017-9-20 zhengkun
 */


function animal(){};
animal.prototype = {
    live : true,
    canrun : true,
    m : function(){
        console.log('animal.m')}
};
function bird(){};
bird.prototype = {
    canfly : true,
    cantfly : true
};
bird.prototype.__proto__ = animal.prototype;
function fish(){};
fish.prototype ={
    haveqi: 'yes',
    eat : function(){
        console.log('eat meat')
    }
};
fish.prototype.__proto__ = animal.prototype;
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
