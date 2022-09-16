var ps = require('prompt-sync')
var prompt = ps();


var el;


el = prompt('skriv in hur mycket el som var förbrukad');

/*hade lite svårt att fatta vad du mena med uppgiften men jag tar det som att upp till 100 kW så är priset 0.5kr/kW 
men så fort det blir 101kW som förbrukas kostar det 0.77kr/kW tills vi når 201 ooch då kostar det 1.3kr/kW
*/

if(el<100) {
    console.log(el)
   
    console.log('kostnaden blir:'+ el*0.5+' kr')
}

if(el<200) {
    console.log(el)
   
    console.log('kostnaden blir:'+ el*0.77+' kr')
}

if(el<250) {
    console.log(el)
   
    console.log('kostnaden blir:'+ el*1,3+' kr')
}

if(el>250) {
    console.log(el)
    total_kostnad = el*1.7
    console.log('kostnaden blir:'+ el*1.7 + total_kostnad *0.2+' kr')
}

