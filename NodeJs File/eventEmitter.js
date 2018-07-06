var events=require('events');
var eventEmitter=new events.EventEmitter();

 eventEmitter.on('sayHi',function(){
     console.log('Hi....');
 });
 eventEmitter.on('sayHello',function(){
    console.log('Hellooo....');
});

console.log("before sayHi");
//eventEmitter.emit('sayHi');
eventEmitter.emit('say');
console.log("after sayHi");
console.log("before sayHello");
eventEmitter.emit('sayHello');
console.log("after sayHello");


