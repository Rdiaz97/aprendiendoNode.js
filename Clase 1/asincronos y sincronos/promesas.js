// esto solo en modulos nativos
// que no tienen promesas natuicas 
// const {promisify}=require('node:util')
// const readFilePromise=promisify(fs.readFile)



const fs = require('node:fs/promises')
console.log("leyendo el 1er archivo")

fs.readFile('./archivo.txt','utf-8')
    .then(text=>{
        console.log("primer texto ",text)
    })
console.log("cosas mientras lee")

console.log("leyendo el 2do archivo");
fs.readFile('./archivo-2.txt', 'utf-8')
    .then(text=>{
        console.log("segundo archivo ",text);
    })
