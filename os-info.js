const os = require("node:os");

console.log('informacion del sistema operativo');

console.log(os.release());
console.log(os.cpus())
console.log(os.platform())
console.log(os.arch())
console.log(os.freemem()/1024/1024)
console.log(os.totalmem()/1024/1024)
console.log("tiempo despierto: ", os.uptime()/60/60)