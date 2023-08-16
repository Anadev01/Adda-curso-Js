// Objetos

// Como criar um objeto no JavaScript?

let pessoa = {
    nome: 'Abraão',
    idade: 26,
}

console.log(pessoa.idade)
console.log(pessoa.nome)
console.log(pessoa['nome']) // forma alternativa de fazer.

// Como adicionar um par chave-valor?

pessoa.cor = 'branca'
console.log(pessoa)

// Como remover um par chave-valor?

delete pessoa.cor
console.log (pessoa)

// Como percorrer?
console.clear()

for (let chave in pessoa) {
    console.log (chave)
}