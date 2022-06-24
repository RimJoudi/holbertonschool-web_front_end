function countPrimeNumbers(){
    for(var counter=2; counter <= 100; counter++){
        var prime = true;
        for (let j=2; j < counter; j++){
            if (counter % j == 0) {
                prime = false;
            }
        }
        if (prime == true){
            console.log(counter);
       }
    }
}
const t0 = performance.now();
for (let counter =0; counter < 10; counter++){
	setTimeout(function () { countPrimeNumbers(); }, 0);
}
const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
