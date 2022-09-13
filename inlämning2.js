var ps = require('prompt-sync');
var prompt= ps();




let år; 

år = prompt('skriv ett årtal: ');


if( år %4 == 0){
    console.log('det är ett skottår');
}else{
    console.log('det är inte delat jämt och är därför inget skottår.')
}


