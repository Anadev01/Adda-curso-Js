// > Arrays - PARTE 2 - MÉTODOS DE ARRAY

const arr1 = [30, 12, 45, 34, 29]
let arr2 = []

//Fatiamento: slice
console.log(arr1.slice(0, 2))
console.log(arr1.slice(2))

console.clear()
// Adicionando elementos:push | unshift
 
console.log('Antes de adicionar:',arr2)

arr2.push(10)

console.log('Depois de adicionar:', arr2)

console.log('Antes de adicionar com o unshift:',arr2) 

arr2.unshift(0)

console.log('Depois de adicionar com o unshift:', arr2)

// Removendo elementos: 
console.clear()

console.log('Antes de adicionar com o pop', arr2)

const elementoRemovido = arr2.pop()

console.log('depois de adicionar com o pop', arr2)
console.log('O elemento removido foi:',elementoRemovido)

console.clear()

//Concatenando Array:

console.log('arr1', arr2)
console.log('arr2', arr2)

console.log(arr1.concat(arr2))
console.log(arr2.concat(arr2))

console.clear()

//Buscando  elementos:

console.log(arr1)

let indiceDoElemento34 = arr1.indexOf(34)

console.log(indiceDoElemento34)

let arr3 = [1, 2, 3, 3, 5, 3]

console.log(arr3.indexOf(3))

console.clear()

//Descobrindo a existência de um elemento: includes

console.log(arr1)

console.log(arr1.includes(12))

//Inventando Arrays: reserve

console.log('arr1 Normal:', arr1)

const arr1Invertido = arr1.reverse()

console.log('arr1 invertido:', arr1Invertido)