/**
 * 2017-9-16 zhengkun
 */


console.log('charAt')
//charAt
var a = ' brave the world  ';
console.log(a.charAt(0));
console.log(a.charAt(100));
console.log(a.charAt(-1));

console.log('concat')
//concat

console.log(a.concat(',hahahah'));


console.log('includes')
//includes

console.log(a.includes('brave'));
console.log(a.includes('world'));
console.log(a.includes('hahaha'));


console.log('endswith')
//end withs

console.log(a.endsWith('brave'))
console.log(a.endsWith('world'));
console.log(a.endsWith('brave',5));


console.log('indexOf')
//indexOf

console.log(a.indexOf('brave'));
console.log(a.indexOf('braave'));
console.log(a.indexOf('brave',0));
console.log(a.indexOf('',16));
console.log(a.indexOf('world',7));
console.log(a.indexOf('',7));

//lastindexOf
console.log('---lastindexOf----')
console.log(a.lastIndexOf('a'));
console.log(a.lastIndexOf('d'));
console.log(a.lastIndexOf('r',3))


//padend
console.log('---pad End----');
console.log(a.padEnd(20));
console.log(a.padEnd(20,'ha'));
console.log(a.padEnd(-2));

//padStart
console.log('padStart');
console.log(a.padStart(20));
console.log(a.padStart(20,'ha'));
console.log(a.padStart(-3,'HA'));


//localcompare
console.log(a.localeCompare('cafbdsfjad'));
console.log(a.localeCompare('aaaaaaa'));

//repeat
console.log('-----repeat-----')
console.log(a.repeat(0));
console.log(a.repeat(1));
console.log(a.repeat(4));
console.log(a.repeat(1.5));


//replace
console.log('-----replace------') ;
console.log(a.replace('fhhahhfsd'));


//search
console.log('----search----');
console.log(a.slice(1,5));
console.log(a.slice(-1,10));
console.log(a.slice(0,100));


//split 
console.log('-----split-----')
console.log(a.split('ve',2));
console.log(a.split('ve',1));
console.log(a.split('',-1));
console.log(a.split('',0));
console.log(a.split('',10));
console.log(a.split('ve',-1));


//Startswith
console.log('----startswith----');
console.log(a.startsWith('brave'));
console.log(a.startsWith('bra'));
console.log(a.startsWith('the'));
console.log(a.startsWith('world',10));

//substr
console.log('----substr----');
console.log(a.substr(-5,4));
console.log(a.substr(0,5));
console.log(a.substr(5,4));
console.log(a.substr(5,0));
console.log(a.substr(20,4));
console.log(a.substr(14,4));


//substring
console.log('---sunstring---');
console.log(a.substring(0,5));
console.log(a.substring(5,0));
console.log(a.substring(10,15));

//trim
console.log('___trim---');
console.log(a.trim());


//trimleft
console.log('---trimLeft---');
console.log(a.trimLeft());


//trimRight
console.log('----trimRight---');
console.log(a.trimRight());