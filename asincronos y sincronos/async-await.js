
const {readFile} = require('node:fs/promises');
// IIFE (inmediatly invoked function expression)
(
  async  ()=>{
    console.log("leyendo el 1er archivo")
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log("primer texto", text)
    console.log("cosas mientras lee")

    console.log("leyendo el 2do archivo");
    const secondText = await readFile('./archivo-2.txt', 'utf-8')
    console.log("segundo archivo ", secondText);


  }
)()

