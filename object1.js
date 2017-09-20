/**
 * 2017-9-16 zhengkun 
 */
var o = Object.create(null,{
    //foo is a regular 'value property'
    foo: {
        writable: true,
        configurable: true,
        value: 'hello'
    },
    //bar is a getter-and-setter(accessor) property
    bar: {
        configurable: false,
        get: function() {
            return 10;
        },
        set: function(value) {
            console.log('Setting `o.bar` to', value);
        }
    }
});
console.log(Object.getOwnPropertyDescriptor(o,'foo'));
console.log(Object.getOwnPropertyDescriptor(o,'foo'));

o.name ='x';

console.log(Object.keys(o));
console.log(`typeof o :${typeof o}`);
console.log(`prototypeof o:${Object.getPrototypeOf(o)}`);

var arr = ['a','b','c'];
arr['name'] = 'cheng';
arr.age = 12;
console.log(arr['0']);
console.log(Object.keys(arr));
console.log(arr.name);
console.log(`typeof arr:${typeof arr},`,Object.getPrototypeOf(arr));

var x = function () {
    console.log('right!');
    
}
x.age = 12;
console.log(Object.keys(x));
console.log(x.age);
x();
console.log(`typeof x:${typeof x}
prototypeof x:${Object.getPrototypeOf(x)}`);





