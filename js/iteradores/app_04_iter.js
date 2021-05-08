//WHILE LOOP: se ejecuta mientras una condicion sea verdadera

let i = 1;//INICIALIZANDO EL WHILE

while( i < 100){//CONDICION

    if (i % 3 === 0 && i % 5 === 0) {//ASI i % 15 === 0 O "i % 3 ===0 i % 5 === 0"
        console.log(`${i} FIZZ BUZZ`);
    } else if(i % 3 === 0){
        console.log(`${i} FIZZ`);
    } else if(i % 5 === 0){
        console.log(`${i} BUZZ`);
    }

    i++;//INCREMENTO
}