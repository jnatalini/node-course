//require('./logger.js');   //or require('./logger');   relative path
//const logger = require('./logger');


function sayHello(name){
    console.log("hello " + name);
}


var sayHullo = function(name){
    console.log("hullo " + name);
}

//sayHello('peter');

//Module system node

//Global methods, in js they are part of the window object, even variables, however in node they are part of the global object, 
//except for variables, that are undefiend
var josevariable = 'jsjsjs';
global.console;
global.setTimeout;
//this renders undefined -->  global.console.log(global.josevariable); 


//Creating modules
//sayHullo('jojo');
// in node.js every file is a module
//console.log(module);

//console.log(logger);

//this is when we exported the object
//logger.log('pepe');

//now we are just exporting a function
//logger('pepe');


//Path module
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);


//OS module
const os = require('os');
var totalMemory = os.totalmem()
var freeMemory = os.freemem();
console.log("Total memory: "  + totalMemory);

//Template string

console.log(`Free Memory: ${freeMemory}`);


//File system module
const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);


fs.readdir('./',function(err,files){
    if (err) console.log('Error',err);
    else  console.log("Result:",files);
})



//Events: this is a class
//https://nodejs.org/dist/latest-v20.x/docs/api/events.html
const EventEmitter = require('events');   //class
//const emitter = new EventEmitter();    //object

//Register a listener
//emitter.addListener
/*
emitter.on('messageLogged',function(arg){
    console.log('Listener called', arg);
})

//with arrow function syntax
emitter.on('messageLogged2', (arg) => {
    console.log('Listener called', arg);
})

*/

//Raise an event
//emitter.emit('messageLogged');    //create an event

//emitter.emit('messageLogged',{id: 1, url:'http://'});    //create an event

//emitter.emit('messageLogged2',{id: 1, url:'http://'});    //create an event


const Logger = require('./logger');
const logger = new Logger();
logger.on('messageLogged',function(arg){
    console.log('Listener called', arg);
})

logger.log('message olivia');


//http module
const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.write('Hello world');
        res.end();
    }
    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3,4,5,6,7,8,9,10]));
        res.end();
    }
});

/*
server.on('connection',(socket) => {
    console.log('new connection ...');
})
*/

server.listen(3000);
