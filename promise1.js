/**
 * 2017-9-22 zhengkun
 */

function a(){
    return new Promise(function(resolveve,reject){
        setTimeout(function(){
            console.log('hahhaha');
        },2000);
    });
};
a().then(function(v){
    console.log(`2 -${v}`)
}).then(function(a){
    console.log(`3: ${a}`)
}).catch(function(error){
    console.log('error')
});
