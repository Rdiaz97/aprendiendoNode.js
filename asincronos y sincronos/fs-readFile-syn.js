const fs = require('node:fs')

const text = fs.readFileSync('./archivo.txt','utf-8')
console.log("leyendo el 1er archivo")
console.log(text);
const secondText = fs.readFileSync('./archivo-2.txt', 'utf-8')
console.log("leyendo el 2do archivo");
console.log(secondText)