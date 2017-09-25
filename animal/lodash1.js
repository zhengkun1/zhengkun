/**
 * 2017-9-25 zhengkun
 */
const _ = require('lodash');
console.log('---sortedlastindex---');
var a = [1,2,3,4,5,5,6,7,6,6];
console.log(_.sortedLastIndex(a,5));

console.log('---sorteduniq---');
var a = [1,1,2,3,4,5,6,6,7,7];
console.log(_.sortedUniq(a))

console.log('---sorteduniqby---');
var a = [1.2,1.1,2.3,2.4,];
console.log(_.sortedUniqBy(a,Math.floor));


console.log('---unzip---');
var a = [['a',1],['b',2],['true','false']];
console.log(_.unzip(a));

console.log('---unzipwith---');
var a = _.unzip([[1,2],[10,20]]);
console.log(_.unzipWith(a,_.add));

console.log('--xor---');
console.log(_.xor([3,4],[2,3]));

console.log('---tail---');
var a = [1,2,3,4];
console.log(_.tail(a)); 

