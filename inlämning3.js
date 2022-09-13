var ps = require('prompt-sync')
var prompt = ps();




let månad;
let år;



månad = prompt('skriv en månad; ');
år = prompt('skriv ett år ')


if( år %4 == 0){
    if (månad == 'mars'){
        console.log('månaden har 30 dagar i sig.')
    }if(månad == 'februari'){
        console.log('månaden har 29 dagar i sig.')
    }
}else{
    console.log('månaden har 31 dagar i sig.')
}if(månad == 'februari'){
    console.log('månaden har 28 dagar i sig.')
}



