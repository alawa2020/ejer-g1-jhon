/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

const inverse = (entry="")=>{
    if(!entry) return console.warn("Enter a text");

    let entry2 = "";
    for(let i of entry) entry2 = "".concat(i,entry2);
    return console.log(entry2);

}

//trying my code
inverse();
inverse("");
inverse("hello this my code");