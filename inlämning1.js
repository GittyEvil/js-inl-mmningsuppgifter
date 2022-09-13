var ps = require('prompt-sync');
var prompt = ps();





let tal; 

tal = prompt('skriv ett tal: ');


if (tal>0 && tal < 10) {
    console.log('talet är inom intervallen')
}else {
    console.log('talet är utanför intervallen')
}
    



