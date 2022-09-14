var ps = require('prompt-sync')
var prompt = ps();




let månad;
let år;



månad = prompt('skriv en månad; ');
år = prompt('skriv ett år ')


if( år %4 == 0){
    if (månad == 'januari'){
        console.log('månaden har 31 dagar i sig.')
    }
    if (månad == 'februari'){
        console.log('månaden har 29 dagar i sig.')
    }
    if (månad == 'mars'){
        console.log('månaden har 31 dagar i sig.')
    }
    if (månad == 'april'){
        console.log('månaden har 30 dagar i sig.')
    }
    if (månad == 'juni'){
        console.log('månaden har 31 dagar i sig.')
    }
    if (månad == 'juli'){
        console.log('månaden har 30 dagar i sig.') 
    }   
    if (månad == 'augusti'){
        console.log('månaden har 31 dagar i sig.')
    }
    if (månad == 'september'){
        console.log('månaden har 30 dagar i sig.')
    }
    if (månad == 'oktober'){
        console.log('månaden har 31 dagar i sig.')
    }
    if (månad == 'november'){
        console.log('månaden har 30 dagar i sig.')
    }
    if (månad == 'december'){
        console.log('månaden har 31 dagar i sig.')                     
    }
}else if(månad == 'februari'){
        console.log('månaden har 28 dagar i sig.')
}





