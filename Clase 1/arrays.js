function sumarPares(numeros) {
    let suma = 0
    for(let i=0;i<numeros.length;i++){
      if(numeros[i]%2===0){
        console.log(numeros[i]);
        suma=suma+numeros[i]
      }
  }
  return suma
}

let numero=[2,2,4,5,6];

// console.log(sumarPares(numero))

// // El método indexOf te permite encontrar la posición de un elemento dentro de un Array. Si el elemento no existe, entonces retorna -1.

// const emosjis = ['✨', '🥑', '😍']

// const posicionCorazon = emosjis.indexOf('😍')

// console.log(posicionCorazon) // -> 2

// // El método includes determina si un Array incluye un determinado elemento, devolviendo true o false según corresponda.

// const emoris = ['✨', '🥑', '😍']

// const tienesCorazon = emorjis.includes('😍')

// console.log(tienesCorazon) // -> true

// // Si al menos uno de los elementos retorna true, entonces el método some retorna true. Si ninguno de los elementos retorna true, entonces el método some retorna false.

// const emojis = ['✨', '🥑', '😍']

// const tieneCorazon = emojis.some(emoji => emoji === '😍')
// console.log(tieneCorazon) // -> true


let texto= ['aca', 'porsi'];



function acabaena(words) {

  for (let index = 0; index < words.length; index++) {
    if (words[index].endsWith('a')) { // <-- Siempre comparamos con el primero
      continue; // <-- Si está todo bien seguimos con el siguiente item 
    } else {
      return false; // <-- Se termina la función y la iteración en fals
    }
  }
  return true; // <-- Si recorrió todos es que está todo bien, !!fuera del for
}

// console.log(acabaena[texto]);

let numeros=[5, -10, -2, -25, -7];

function ordenAbs (array){
  let total=[]
  for (let i = 0; i < array.length; i++) {
    let nTotal=Math.abs(array[i]);
    console.log(nTotal)
    total.push(nTotal);
  }

  total.sort((a,b)=>a-b);
return total
}

// console.log(ordenAbs(numeros))


function sortAbsoluteNumbers(numbers) {
  return [...numbers].sort((a, b) => {
    if(Math.abs(a) < Math.abs(b)) return -1
    if(Math.abs(a) > Math.abs(b)) return 1
  })  }

  // console.log(sortAbsoluteNumbers(numeros));


  const palabras=["juego","amigo","complicado"];
  const palabra="juego";

function buscaPalabras(words, word) {
  let indice = words.indexOf(word);
  let resultado = words.filter(palabra => palabra.length > indice);
  return resultado;
}

// console.log(buscaPalabras(palabras,palabra));

const matrix = [
  ['HTML', 'CSS', 'JavaScript'],
  ['Java', 'C++', 'Python'],
  ['Ruby', 'Go', 'Swift']
]



function findJavaScript(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 'JavaScript') {
        return [i, j];
      }
    }
  }
  return [-1, -1]; // Devolver un valor que indique que no se encontró 'JavaScript' en la matriz
}

const position = findJavaScript(matrix)
console.log(position) // -> [0, 2]

function minAndMaxWord(libros) {
  let minIndex = libros.indexOf(Math.min(...libros));
  let maxIndex = libros.indexOf(Math.max(...libros));
  return [minIndex, maxIndex];
}