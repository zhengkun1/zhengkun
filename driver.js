/*
* 2017-9-15 zhengkun   
*/ 
 
//HW

var drivers = ['/dev/display','/dev/console'];


//API

function open(dev){
    var index = -1;
    index = drivers.indexOf(dev);
    if (index < 0 ){
        console.log(`not find`)
    };
    driver[index].open();
    return index;
};

function write(dev,content){
    driver[dev].write(content);
}

function read(dev){

}

function close(dev){
    driver[dev].close();
}



//driver

var driver = [
{
    type : '/dev/display',
    open : function(){
        console.log(`display open`);
    },
    write :function(content){
        console.log(`display ${content}`)
    },
    read : function(){

    },
    close : function(){
        console.log(`hahahaha`)
    }
},
{
    type : '/dev/console',
    open : function(){
        console.log(`console open`);
    },
    write :function(dev){
        console.log(`console ${content}`)
    },
    read : function(){

    },
    close : function(){
        console.log(`heihiehei`)
    }
}
]


var fd = open('//dev/display');
write(fd,'success');
close(fd);
