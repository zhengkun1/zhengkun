/*
* 2017-9-14 zhengkun
*/


var a=[1,1];
for(i = 2;i  <= 100;i++){
    a[i] = a[i-1]+a[i-2]
    a.push(a[i]);
}
console.log(a)



var a=[1,1];
for(i =2 ;i <= 30;i++){
    a[i] = a[i-1]+2 * a[i-2]
    a.push(a[i]);
}
console.log(a)
