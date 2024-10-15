//  Dia 07 => dia de revisão e exercício
// 1 - Criar uma função que retorna a média dos açunos 
// a partir de uma lista de números...


function calcularMedia(numeros) {
    const soma = numeros[0] + numeros[1] + numeros[2]
    return media = soma / 3
}
const avaliacoes = [5, 5, 5]
const resultadoMedia = calcularMedia(avaliacoes)
console.log("A media do aluno e: " + resultadoMedia);


// 2ª opção Projeto contador simples
let contador = 0

function incrementar() {
    contador++
    console.log("Contador: " + contador);
}
function decrementar() {
    contador--
    console.log("Contador: " + contador);
}
incrementar() // Contador: 1
incrementar() // Contador: 2
decrementar() // Contador: 1

// 3 - Calcular a media upgrade ;)
function calculoMedia(lista) {
    let somar = 0

    for (let i = 0; i < numbers.length; i++) {
        if (typeof lista[i] === 'number') {
            somar += lista[i]
        } else {
            console.log("valor inválido na lista. Ignorar" + lista[i]);
        }

    }
    return somar / lista.length
}
const numbers = [10, 20, 30, 40] // 100 / 4 => 25
const mediaUpgrade = calculoMedia(numbers)
console.log("A media e: " + mediaUpgrade);


