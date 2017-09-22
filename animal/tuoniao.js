/**
 * 2017-9-22 zhengkun
 */

const bird = require('./bird');
function tuoniao(){};
tuoniao.prototype = {
    eatwhat : 'meat'
} ;
module.exports = tuoniao;