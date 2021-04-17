/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

const eliminator = (text = "", word="")=>{
    return (!text)
        ?console.warn("enter the text")
        :(!word)
            ?console.warn("enter the word")
            :console.log(text.replace(RegExp(`${word}`,"ig"),""))
}

//trying the code
let a = "xyz1, xyz2, xyz3, xyz4 y xyz5";

eliminator()
eliminator("")
eliminator("helo")
eliminator(a,"xyz")