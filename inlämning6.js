var ps = require('prompt-sync')
var prompt = ps();


var tal1;
var tal2;
var tal3;
var lista = [];


tal1 = Number(prompt('skriv ett tal '));
tal2 = Number(prompt('skriv ett tal till '));
tal3 = Number(prompt('skriv ett sista tal som vi ska jämföra med '));

function störst() {
    lista.push(tal1)
    lista.push(tal2)
    lista.push(tal3)

    if(tal1<tal2 && tal2< tal3) {
        console.log('stigande')
    }

    if(tal1>tal2 && tal2>tal3){
        console.log('sjunkande')
    }

    if(tal1 == tal2 && tal2 == tal3){
        console.log('ingen skillnad')
    }
}

störst();