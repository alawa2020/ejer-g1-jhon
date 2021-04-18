/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

const nCapicua = (n = undefined)=>{
    return(n===undefined || n==="")
     ?console.warn("enter a number")
     :(n===0)
      ?console.warn("the number cannot be 0")
      :(Math.abs(n).toString()===String(Math.abs(n)).split("").reverse().join(""))
        ?console.info("is capicua")
        :console.info("isn't capicua")
}

nCapicua();
nCapicua("")
nCapicua(-4)
nCapicua(-455)
nCapicua(99.99)
nCapicua(565)