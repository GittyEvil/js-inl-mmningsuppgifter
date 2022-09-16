var ps = require('prompt-sync')
var prompt = ps();


var test;


test = Number(prompt('skriv något tecken '));


if(typeof test === 'boolean') {
    console.log()
}

if(Number.isInteger(test) == true && test>0) {
    console.log('det är ett tal som är positivt')
}

if (Number.isInteger(test) == true && test<0) {
    console.log('är ett tal och är negativt')
}
