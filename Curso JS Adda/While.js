// Aula 07- Laços condicionais

const input = require('readline-sync')

const numero_sorteado = 5;

let numero = Number( input.question('Qual numero voce escolhe? ') )

while (numero !== numero_sorteado) {
    console.log('Voce errou o numero. Tente novamente...!')

    numero = Number ( input.question('Qual numero voce escolhe?'))

}    

console.log ('Parabens, você acertou!')



