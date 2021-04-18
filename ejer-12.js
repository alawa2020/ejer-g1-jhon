/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

const prime = (n=undefined)=>{
    if(n===undefined) return console.warn("enter a number");
    if(n===0) return console.warn("the number cannot be 0!")
    if(typeof n != "number") return console.warn("the number have to be a number!");

    n = Math.abs(n) ;
    let isPrime = true;

    for (let i = 2;i<n-1 ; i++){
        if(n%i==0) isPrime=false; break;
    }

    return isPrime;

}
console.log(prime())
console.log(prime("s"))
console.log(prime(3))
console.log(prime(7))
console.log(prime(489))