/**
 * 2017-9-22  zhengkun
 */

const animal = require('./animal');
function fish(){};
fish.prototype ={
    haveqi: 'yes',
    eat : function(){
        console.log('eat meat')
    }
};
fish.prototype.__proto__ = animal.prototype;
console.log(fish)

module.exports = fish;