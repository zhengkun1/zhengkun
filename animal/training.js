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
console.log(_.pullAll(a,[2]));


console.log('---pullat--- ');
var array = ['a', 'b', 'c', 'd'];
var pulled = _.pullAt(array, [1, 3]);
 console.log(array);
// => ['a', 'c']
 console.log(pulled);
// => ['b', 'd']

console.log('---remove---');
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
 console.log(array);
// => [1, 3]
 console.log(evens);
 // => [2, 4]


console.log('---sortedIndex---');
var a = [2,3,4,5,6];
console.log(_.sortedIndex(a,3.5));

console.log('---sortedIndexby---');
var objects = [{ 'x': 4 }, { 'x': 5 }];

console.log(_.sortedIndexBy(objects, { 'x': 4 }, function(o) {
  return o.x; 
}));
// => 0

// The `_.property` iteratee shorthand.
console.log(_.sortedIndexBy(objects, { 'x': 4 }, 'x'));
// => 0


