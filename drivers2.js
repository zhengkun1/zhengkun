/*
* 2017-9-15
*/


//hardware

var  device = ['mouse','keyboard']

//os
function open(dev){
    index = -1;
    index = device.indexOf(dev);
    if(index<0){
        console.log(`not find`)
    }
    drivers[index].open();
    return index;

};
function write(dev,content){
    drivers[dev].write(content);
}
function read(dev){
    drivers[dev].read();
}
function close(dev){
    drivers[dev].close();
}


//driver

var drivers =[ 
    {
    type :'mouse',      
    open: function(){
        console.log('mouse open');
    },
    write : function(content){
        console.log(`mouse ${content}`);
    },
    read : function(){
        console.log('mouse read');
    },
    close : function(){
        console.log('mouse close');
    }
},
{
    type :'keyboard',      
    open: function(){
        console.log('keyboard open');
    },
    write : function(content){
        console.log(`keyboard ${content}`);
    },
    read : function(){
        console.log('keyboard read');
    },
    close : function(){
        console.log('keyboard close');
    }
},
]



var fd = open('mouse');
write(fd,`hello`);
read(fd);
close(fd);