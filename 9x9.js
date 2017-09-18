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
*/


for(var b = 1 ; b <= 9;b++){
    var a  = ``;
    for(var c = 1;c <=b;c++){
        a =  a + `${b * c}\t`;
    };console.log(a)
}