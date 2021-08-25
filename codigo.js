let numberHigher = parseInt(prompt('Ingrese un numero mayor a 1000'))
let numberLess = parseInt(prompt('ingrese un numero meno a 100'))
const inToTheNumber = (a, b) => a / b
let resultado = inToTheNumber(numberHigher, numberLess)
console.log(`El numero ${numberLess} cabe ${resultado} veces en el numero ${numberHigher}`);