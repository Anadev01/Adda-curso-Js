// Aula 05- Coerção de tipos

// 1- Coerção Explícita (Manual)
const numero = 10
console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)

console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('123456'))
console.log(parseFloat('123.980'))
console.log(parseInt('123980'))
console.log(Boolean('123')) // Somente se for 0 vai dar False.

console.clear()

// 2- Coerção Inplícita (Automática)

console.log (10 + 1) // O JavaScript entencde que é uma soma.
console.log ('10' + 1) // O JavaScript entende que tem que juntar (Concatenar).
console.log ('10' - 1) // O JavaScript entende que é para subtrair.
console.log (3 * '10') // O JavaScript entende que é para multiplicar.

console.clear()
// 3- Qual será a saída desses códigos?

let n = 1 + '1' // resultado: 11

n = n - 1 // resultado: 10
console.log(n)

// 4- Qual será a saída desse código?
console.log(2 + 3 + 4 + '5')

// 5- Qual será a saída desse código?
console.log('5' + 2 + 3 + 4)

// 6- Qual será a saída desse código?
console.log('10' - '4' - '3' - 2 + '5')

