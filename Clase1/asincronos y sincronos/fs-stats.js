// fs(file system)

const fs = require('node:fs') //apartir de node 16 va con los ":"

//sincrono vs asincrono
// sincrono

const stats = fs.statSync('./archivo.txt')
console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
)