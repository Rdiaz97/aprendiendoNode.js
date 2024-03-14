function createObject (name, subs) {
  return {
    name,
    subscribers: subs,
    hash: name.length * subs,
    getStatus: function () {
      return 'El canal de ' + this.name + ' tiene ' + this.subscribers
    }
  }
}

console.log(createObject('dani', 100))

const spiderman = {
  name: 'Spidey',
  universe: 42,
  powers: ['web', 'invisibility', 'spider-sense']
}

for (const property in spiderman) {
  console.log(`${property}: ${spiderman[property]}`)
}

//   Iterar con Object.keys()
// El método Object.keys() retorna un array con las propiedades enumerables de un objeto.

const properties = Object.keys(spiderman)

console.log(properties.length) // 3

properties.forEach(property => {
  console.log(property)
})

//   Iterando con Object.values()
// El método Object.values() retorna un array con los valores correspondientes a las propiedades enumerables de un objeto.

const values = Object.values(spiderman)

values.forEach(value => {
  console.log(value)
})

// Iterando con Object.entries()
// El método Object.entries() retorna un array de arrays, donde cada subarray es un par [propiedad, valor] correspondiente a las propiedades enumerables de un objeto.

const entries = Object.entries(spiderman)

entries.forEach(entry => {
  console.log(entry)
})

const entrieses = Object.entries(spiderman)

entrieses.forEach(entry => {
  const property = entry[0]
  const value = entry[1]

  console.log(`${property}: ${value}`)
})

function getKeysOfBooleanValues (obj) {
  return Object.keys(obj).filter(key => typeof obj[key] === 'boolean')
}

console.log(getKeysOfBooleanValues({ a: true, b: 42, c: false }))
