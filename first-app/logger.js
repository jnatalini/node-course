//console.log(__filename);
//console.log(__dirname);
const EventEmitter = require('events');   //class
//const emitter = new EventEmitter();    //object

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message) {
        //send an http request
        console.log(message);
        this.emit('messageLogged',{id: 1, url:'http://'});    //create an event
    }    
}

//we are exporting an onject, with the function log
//module.exports.log = log;
//module.exports.endPoint = url;

//instead of exporting the whole object we can export the function directly
module.exports = Logger;