// Exercicio de fixação

// Versão 01
// Criar um programa simples para somar dois números

let num1 = 10
let num2 = 20

function somarNumeros() {
    return num1 + num2
}
let resultado = somarNumeros(num1, num2)

console.log("A soma de " + num1 + " + " + num2 + ", é igual a = " + resultado);
// A soma de 10 + 20, é igual a = 30

// Versão com node, digitar no terminal os valores com o uso do módulo readline
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})
rl.question("Digite o primeiro numero: ", (resposta1) =>{
    rl.question("Digite o segundo numero: ", (resposta2) => {
        const resultado02 = parseFloat(resposta1) + parseFloat(resposta2)
        console.log("A soma é: " + resultado02);
        rl.close()
    })
})

// Digite o primeiro numero: 76
// Digite o segundo numero: 90
// A soma é: 166
