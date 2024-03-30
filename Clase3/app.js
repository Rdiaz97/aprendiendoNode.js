const express = require('express') // require porque es commonJS
const crypto = require('node:crypto')
const movies = require('./movies.json')

const app = express()
app.use(express.json())
app.disable('x-powered-by') // desahbilita de la cabecera el framwork que usas

app.get('/', (req, res) => {
  // leer el query param de format
//   const format = req.query.format
//   if (format === 'html') {
//     res.send('<h1>Hello</h1>')
//   }
  res.json({ message: 'hola mundo' })
})

app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    // sirve pero no es case sensitive
    // const filteredMovies = movies.filter(
    //   movie => movie.genre.includes(genre)
    // )
    // return res.json(filteredMovies)
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => { //    path to regexp
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)
  res.status(404).json({ message: 'Movies not found' })
})

app.post('/movies', (req, res) => {
  const {
    title,
    genre,
    year,
    director,
    duration,
    rate,
    poster
  } = req.body

  const newMovie = {
    id: crypto.randomUUID(),
    title,
    genre,
    year,
    director,
    duration,
    rate: rate ?? 0,
    poster
  }
  // esto no seria REST porque estamos guardando el estado de la aplicacion en memoria

  movies.push(newMovie)

  res.status(201).json(newMovie)// actulizar la cache del cliente
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`servidor esta escuchando en el puerto http://localhost:${PORT}`)
})

// REST API representetional state transfer (arquitectura de software)
