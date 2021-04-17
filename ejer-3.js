/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

//SOL 1
const myFunction1 = entry => entry.split(" ");
console.log(myFunction1("hola que tal"))

//SOL2
const myFunction2 = entry => {
    let word = String(entry);

    const list = [];
    let w = "";
    let count = 0;
    
    for(let i = 0;i<word.length;i++){
        w=w+word[i];
        if(word[i]==" " || i+1==word.length){
            list[count] = w;
            w = "";
            count++;
        }
    }
    return list;
};

console.log(myFunction2("this is my life, this is beatiful!"))

