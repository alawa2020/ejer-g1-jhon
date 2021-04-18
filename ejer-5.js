/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

const inverse = (entry="")=>{
    if(!entry) return console.warn("Enter a text");

    let entry2 = "";
    for(let i of entry) entry2 = "".concat(i,entry2);
    return console.log(entry2);

}

//trying my code
console.time("sol1")
inverse();
inverse("");
inverse("hello this my code");
console.timeEnd("sol1")
//SOL2
const inverse2 = (text = "")=>{
    (!text)
     ?console.warn("enter the text!")
     :console.info(text.split("").reverse().join(""));
}

//trying my code
console.time("sol2")
inverse2();
inverse2("");
inverse2("hello this my code");
console.timeEnd("sol2")