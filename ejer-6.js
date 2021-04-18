/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

const counter = (text="",word="")=>{
    if(!text) return console.warn("enter a text please!");
    if(!word) return console.warn("enter the word please");

    countt= 0;
    for(let i=0;i<text.length;i++){
        if(text[i]===word[0]){
            let count=0;
            for(let j of word){
                let findIt = true;
                if(text[i+count]!=j) {
                    findIt=false; 
                }
                if(findIt){
                    count++;
                    if(count==word.length) countt++;
                }
            }
        }
    }
    console.log( countt);
}

counter("hellohellohelloasdfhello","hello")

//SOL 2
const counter2 = (text = "", word="")=>{
    if(!text) return console.warn("enter the text");
    if(!word) return console.warn("enter the word");

    let count=0;
    let pos = text.indexOf(word);

    while(pos !== -1){
        count++;
        pos = text.indexOf(word,pos+1);
    }
    console.info(count)
}
counter2("hellohellohelloasdfhello","hello")