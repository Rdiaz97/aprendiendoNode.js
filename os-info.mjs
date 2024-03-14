import { release, cpus, platform, arch, freemem, totalmem, uptime } from 'node:os'
// .mjs -> para EcmaScript Modules

console.log('informacion del sistema operativo')

console.log(release())
console.log(cpus())
console.log(platform())
console.log(arch())
console.log(freemem() / 1024 / 1024)
console.log(totalmem() / 1024 / 1024)
console.log('tiempo despierto: ', uptime() / 60 / 60)
