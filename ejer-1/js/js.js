/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/

const counter = (thing,n) =>{
    thing = String(thing);

    console.log(`this entry has ${thing.length} characters`)
    let count = 1;
    for(let i of thing){

        console.log(`${count}: ${i}`);
        count++;
    }

};

//trying
counter("counting this line",5)