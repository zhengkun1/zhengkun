/**
 * 2017-9-21 zhengkun
 */

console.log('best');
const _ =require('lodash');
console.log('---difference---');
var a =[1.2,2.1,3.2,4,5,1,2];
console.log(_.difference(a,[1,2,3]));
// remove a = [1,2]
var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];
  console.log('---droprightwhile---');
console.log(_.dropRightWhile(users,function(o){return !o.active}));
console.log(_.dropRightWhile(users,['active', false]));
console.log('---findIndex---');
console.log(_.findIndex(users,function(o){return o.user == 'barney';}));
console.log(_.findIndex(users,{'user':'barney','active':true }));

console.log('---fill---');
var b = [1,2,3,4,5,6];
console.log(_.fill(b,'a'));
console.log(_.fill(Array(3),1))

console.log('---flatten---');
var c = [1,[2,[3,4,[5]]]];
console.log(_.flatten(c));
console.log(_.flattenDeep(c));
console.log(_.flattenDepth(c,2));

console.log('----frompairs---');
var a = [['a',1],['b',2]];
console.log(_.fromPairs(a));


console.log('---head---');
var a = [1,2,3,4,5];
console.log(_.head([2,3]));

console.log('---indexof---');
var a = [1,2,3,4,5,6,7,8,7,6,5,4,3,2,1];
console.log(_.indexOf(a,3));
console.log(_.indexOf(a,3,3));

console.log('---initial---');
var a = [1,2,3,4,5,6,7,8];
console.log(_.initial(a));


console.log('---intersection---');
var a = [[2,1],[2,4]];
console.log(_.intersection([2,1],[4,2]));

console.log('---intersectionwith');
var a = [{'a':1,'b':2},{'a':3,'b':4}];
var b = [{'a':3,'b':4},{'a':2,'b':5}];
console.log(_.intersectionWith(a,b,_.isEqual))


console.log('---sortindex---');
var a =[1,2,3,4,5,6]
console.log(_.sortedIndex(a,100));

console.log('---pull---');
var a = [1,2,3,2,1,3];
console.log(_.pull(a,2));
console.log(_.pullAll(a,2));




