var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('scream',(age)=>{

    console.log(`hello world your age is ${age}`)

})
   console.log("hello world");

//Fire the 'scream' event:


    eventEmitter.emit('scream',44);
 
