// argumentos de entrada
console.log(process.argv)
// controlar el proceso y su salida
// process.exit() // 0 perfecto 1 cierre del programa

// podemos controlar eventos del proceso

process.on('exit',()=>{
    //limpiar recursos
})
// current working directory
console.log(process.cwd())

// plataform

console.log(process.env.PEPITO)