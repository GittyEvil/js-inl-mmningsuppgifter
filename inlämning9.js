var ps = require('prompt-sync')
var prompt = ps();


var sida1;
var sida2;
var sida3;


sida1 = Number(prompt('skriv ett tal '));
sida2= Number(prompt('skriv ett tal till '));
sida3= Number(prompt('skriv ett sista tal för triangeln '));
//kollar så att sida 1 + sida 2 är större än sida 3 samt att sida 2 + sida 3 är större än sida 1
if(sida1+sida2 > sida3 && sida2+sida3>sida1) {
    console.log('giltig triangel');
}else{
    console.log('ogiltig.')
}
