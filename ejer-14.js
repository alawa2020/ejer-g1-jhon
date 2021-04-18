/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

const degrees = (v = undefined, d="")=>{
    //validations
    if(v==undefined) return console.error("enter a value!");
    if(typeof v!="number") return console.error("the value has to be a number!");

    if(d==="") return console.error("enter a degree!");
    if(typeof d != "string") return console.error("enter a valid degree1!");
    d = d.toLowerCase();
    if( d!=="c" && d !== "f") return console.error("enter a valid degree!");

    //code

    let out = 0;
    if(d==="f"){
        out = v*1.8+32;
        console.info(`${v} C° = ${out} F°`);
    }
    else{
        out = (v-32)/1.8;
        console.info(`${v} F° = ${out} C°`);
    }
}

degrees();
degrees(3)
degrees(3,"e");
degrees(3,"f");
degrees(3,"c");