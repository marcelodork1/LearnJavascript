const alunos = [
    {nome: 'João', nota: 8.5},
    {nome: 'Maria Eduarda', nota: 9.8}
]

// Imperativo  --> O que tem que ser feito e como ser feito Métodologia

let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

//Declarativo --> Um Guia

const getNota = aluno => aluno.nota
const soma = (total,atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)