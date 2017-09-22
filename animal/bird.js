/**
 * 2017-9-22 zhengkun
 */
const animal = require('./animal');
function bird(){};
bird.prototype = {
    canfly : true,
    cantfly : true
};
bird.prototype.__proto__ = animal.prototype;

module.exports = bird;