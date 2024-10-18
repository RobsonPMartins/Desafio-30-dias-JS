// Dia 10
// Hoje vamos revisar objetos em JS
// Objetos em JS são usados para armazenar coleções
// de pares chave-valor

// Como criar
let aluno = {
    nome: "Robson",
    idade: 34,
    notas: [9, 7, 6],
}
// acessando
console.log(aluno);
// { nome: 'Robson', idade: 34, notas: [ 9, 7, 6 ] }

// Modificando
aluno.idade = 17
console.log(aluno);
// { nome: 'Robson', idade: 17, notas: [ 9, 7, 6 ] }

// Métodos em Objetos para executar funções
let alunos = {
    nome: "Carlos",
    saudar: function () {
        console.log("Olá, " + this.nome);
    }
}
alunos.saudar()
// Olá, Carlos

// Objetos aninhados pode conter objetos ou arrays
let escola = {
    nome: "Escola ABC",
    endereco: {
        rua: "Rua esperança",
        numero: 123,
        cidade: "São Paulo"
    }
}
console.log(escola.endereco.cidade);
// São Paulo

// Manipulação de arrays de objetos
// Arrays podem contem multiplos objetos

let pessoas = [
    {nome: "Carlos", idade: 22},
    {nome: "Ana", idade: 26},
    {nome: "João", idade: 76}
]
console.log(pessoas[1].nome);
// Ana
