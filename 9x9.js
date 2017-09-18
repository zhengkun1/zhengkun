/**
 *  2017-9-17 zhengkun
 */
/*
for (var b = 1; b <= 9;b++){
    var a =[``]; 
    for(var c = 1;c <= b;c++){
        a.push(`${b*c}`);
    }console.log(`${a}`);
}


for(var b = 1 ; b <= 9;b++){
    var a  = ``;
    for(var c = 1;c <=b;c++){
        a =  a + `${b * c}\t`;
    };console.log(a)
}

*/



console.log('\t1\t2\t3\t4\t5\t6\t7\t8\t9')

for(var b = 1;b <= 9;b++ ){
    var a = '';
    for(var c = 1 ;c <= b;c++ ){
        a  =  a + `${b*c}\t`;
    }
    a = `${b}\t` + a;
    console.log(a); 
}