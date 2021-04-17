/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

const poli = (word = "")=>{
    //VALIDATIONS
    if(!word) return console.warn("enter a word");
    word = word.trim().toLowerCase();

    //CODE
    wordI = "";
    for(let i = word.length-1; i>=0; i--) wordI = wordI+word[i];
    return (word===wordI)
        ?console.log("is palindrome!")
        :console.log("isn't palindrome!")
}

poli();
poli("hongo");
poli(" Salas");
