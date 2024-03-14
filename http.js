const http = require('node:http')
const { finAvailablePort } = require('./free-port.js')

const desiredPort = process.env.port ?? 3000

const server = http.createServer((req, res) => {
  console.log('request recibida')
  res.end('Hola Mundo')
})

finAvailablePort(desiredPort).then(port => {
  server.listen(0, () => {
    console.log(`servidor esta escuchando en port http://localhost:${server.address().port}`)
  })
})
