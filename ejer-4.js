/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

//SOL1
const myFunction = (entry, n)=>console.log(entry.repeat(n));
myFunction("hello",4)

//SOL2 
const myFunction2 = (entry, n)=>{
    let w = "";
    for(let i = 0; i<n;i++){
        w=w+entry +" ";
    }
    console.log(w)
}
myFunction2("hallo",4)