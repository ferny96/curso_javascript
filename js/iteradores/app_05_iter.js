//DO WHILE LOOP: se ejecuta al menos una vez.

//DIFERENCIAS WHILE Y DO WHILE
//DO WHILE: se va a ejecutar al menos una vez independientemente que se cumpla o no la condicion.
//WHILE: no se ejecuta sino se cumple la condicion.

let i = 0;

do {

    console.log(`Numero ${i}`);
    i++;//INCREMENTO

} while(i < 10);//CONDICION


//Con FIZZBUZZ
let n = 1;

do {

    if (n % 15 === 0){
        console.log(`${n} FIZZ BUZZ`);
    } else if (n % 3 === 0) {
        console.log(`${n} FIZZ`);
    } else if (n % 5 === 0) {
        console.log(`${n} BUZZ`);
    }

    n++;

} while (n < 100); //CONDICION