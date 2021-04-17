/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/

const counter = (entry) =>{
    word = String(entry);

    console.log(`this entry has ${word.length} characters`)

    let count = 1;
    for(let i of word){

        console.log(`${count}: ${i}`);
        count++;
    }

};

//trying
counter("counting this line",5)