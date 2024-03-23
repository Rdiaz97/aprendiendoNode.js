const fs = require('node:fs')
const http = require('node:http')

const desiredPort = process.env.port ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200// OK
    console.log('request recibida: ', req.url)
    res.end('Bienvenido')
  } else if (req.url === '/imagen-bonit.png') {
    fs.readFile('./pngegg.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal server error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    console.log('request recibida: ', req.url)
    res.end('Contactos')
  } else {
    res.statusCode = 404
    res.end('404 not found')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`servidor esta escuchando en port http://localhost:${desiredPort}`)
})
// request = peticion, hacer una request es hacer una peticion

// en las peticiones entran url, headers, method (GET), body

// Response = respuesta

// statuscode, body, header

// nodemon y --watch para que el servidor no lo estes cerrando y volviendo abrir
