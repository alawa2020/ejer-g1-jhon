/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

const number = (n=undefined)=>{
    if(n==undefined) return console.warn("enter a number!");
    if(n===0) return console.log(undefined);
    if (typeof n != "number") return console.warn("the entry has to be a number!");

    n = Math.abs(n);

    return(n%2==0)
     ?console.info("is a even number")
     :console.info("is a odd number");
}

number();
number("");
number(0);
number(-8);
number(9)
