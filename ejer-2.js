/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

const myFunction = (entry, n)=>{
    word = String(entry);

    console.log(word.substring(0,n))
}

//trying this code
myFunction("paragraph",4)