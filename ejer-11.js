/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const factorial = (n=undefined)=>{
    return(n===undefined||n<0)
     ?console.warn("enter a valid number")
     :(n===0)
      ?1
      :n*factorial(n-1)
}

//trying
console.log(factorial(1))