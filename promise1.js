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
    return v
}).then(function(v){
    console.log(`3: ${v}`)
}).catch(function(error){
    console.log('error')
});
