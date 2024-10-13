// Revisão
// Functions ou função em javascript é uma das estruturas
// fundamentais na programação que permite agrupar
// blocos de códigos reutilizáveis

// Como declara de forma básica
function nomeDaFuncao(parametro01, parametro02) {
    // retorno bloco de código
    return resultado
}

// 1- Função simples sem parâmetros
function saudacao() {
    console.log("Olá, seja bem-vindo a minha rede!");
}
// retorno da função
saudacao(); // Olá, seja bem-vindo a minha rede!

// 2- função com parametros
function soma(a, b) {
    return a + b;
}
console.log(soma(5, 5)); // resultado = 10

// 3- função com parametro 2ª forma
function subtracao(x, y) {
    return x - y;
}
let resultadoSubtracao = subtracao(10, 9)
console.log("Resultado da subtração: " + resultadoSubtracao); // 1

// 4- função anônima atribuida a uma variavel
const multiplicacao = function(w, z){
    return w * z;
}
let retornoMultiplicacao = multiplicacao(2, 3)
console.log("Resultado da multiplicação: " + retornoMultiplicacao); // 6

// 5- Arrow functions (Função seta)
const divisao = (k, l) => k / l;
let resultadoDivisao = divisao(10, 2)
console.log("Resultado da divisao: " + resultadoDivisao);

//  6- Arrow function com multiplas linhas
const divisao02 = (c, d) => {
    if (c === 0) {
        return "Erro: Divisão por zero!"
    }
    return c / d;
}
let resultadoDivisao02 = divisao02(12, 4)
console.log("Resultado da divisao02: " + resultadoDivisao02); // 3

// 7- (this) Contextual
// Em funções tradicionais, o valor de this depende de como a função é chamada
// Porem dentro de um objeto (this) refere-se ao objeto em si
const obj = {
    nome: 'Robson',
    dizerNome: function () {
        console.log(this.nome);
    }
}
obj.dizerNome(); // Saída esperada: (Robson)

