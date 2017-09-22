/**
 * 2017-9-22 zhengkun
 */

const fish = require('./fish')
function shark(){};
shark.prototype = {
    howtolive : 'eatfood'
};
shark.prototype.__proto__ = fish.prototype;
module.exports = shark;
