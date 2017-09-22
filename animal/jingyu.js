/**
 * 2017-9-22 zhengkun
 */

const fish = require('./fish')
function jingyu(){};
jingyu.prototype = {
    tixing : 'big'
};
jingyu.prototype.__proto__ = fish.prototype;
module.exports = jingyu;
