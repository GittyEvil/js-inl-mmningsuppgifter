var ps = require('prompt-sync')
var prompt = ps();


var test;


test = prompt('skriv något tecken ');


if(typeof test === 'boolean') {
    console.log()
}
console.log(test)