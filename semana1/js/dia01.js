// Variaveis e tipos de dados em Javascript
//  var, let e const

var nome = 'Robson';
let sobrenome = 'Pereira Martins';
// Var e let podem ser modificados

const idade01 = 34;
// O valor atribuido a uma variavel const 
// é de valor imutável.
// idade = 36;
console.log(idade01); //TypeError: Assignment to constant variable.

// Outro exemplo
const pessoa = {nome: 'joao', idade02: 24}
pessoa.idade02 = 31
console.log(pessoa.idade02);
// Aqui em objeto é permitido

// Tipos de Dados Primitivos em JS
// String, Number, Boolean, Undefined, NullSymbol, Biglnt

// String
let nome03 = 'Paulo'
let saudacao = `Olá, ${nome03}!` // Template Literal
console.log(saudacao);
// Number
let idade03 = 30
let altura01 = 1.75
console.log(idade03);
//Boolean
let maiorDeIdade = true
console.log(maiorDeIdade);
// Undefined
let valor
console.log(valor);
// Null
let objetoNulo = null
// Symbol
let id = Symbol('id')
console.log(Symbol);
// BigInt
let numeroGrande = 1234567890n
console.log(numeroGrande);

// tipos de Dados não Primitivos
// Object, Array, Typeof
// Object
let pessoa04 = {
    nome04: 'Rafael',
    idade04: 45,
    profissão: 'Developer'
}
console.log(pessoa04);
console.log(typeof pessoa04);

// array
let lista = [1, "texto", true]
console.log(lista);
// Typeof
let nome05 = 'Ana'
console.log(typeof nome05);

let idade05 = 23
console.log(typeof idade05);







