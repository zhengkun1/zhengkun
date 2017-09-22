/**
 * 2017-9-22  zhengkun
 */

const ying = require('./ying');
var  a = new ying;
console.log(a.livedin);
const shark = require('./shark')
var b = new shark;
console.log(b.haveqi);
console.log(b.howtolive);
const bird = require('./bird');
console.log(bird.prototype);

const fish = require('./fish');
console.log(fish.prototype);

const tuoniao = require('./tuoniao');
var c = new tuoniao
console.log(c.eatwhat);

