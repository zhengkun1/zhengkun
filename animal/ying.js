/**
 * 2017-9-22 zhengkun
 */


const bird = require('./bird');
function ying(){};
ying.prototype = {
    livedin :  'sky'
};
ying.prototype.__proto__ = bird.prototype;
module.exports = ying;