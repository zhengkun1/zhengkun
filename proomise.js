/**
 * 2017-9-23  zhengkun
 */

function asyncFunction() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('Async Hello world');
      }, 2000);
    });
  }
  
  asyncFunction().then(function (value) {
    console.log(`2:${value}`);
    return value;
  }).then(function (value){
      console.log(`3:${value}`)
  }).catch(function(error){
      console.log(`catch : ${error}`)
  });

