const fs = require('node:fs')
console.log("leyendo el 1er archivo")

fs.readFile('./archivo.txt','utf-8',(err,text)=>{//call backs siempre se ejecutara una vez que el evento termine
    console.log("pimer texto ",text);
})
console.log("cosas mientras lee")

console.log("leyendo el 2do archivo");
fs.readFile('./archivo-2.txt', 'utf-8',(err,text)=>{
    console.log("segundo archivo ",text);
})


