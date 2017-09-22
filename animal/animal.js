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
module.exports = animal;