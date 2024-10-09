// Controle de fluxo
// O controle de fluxo é crucial em qualquer linguagem de programação,
// pois permite que o programa tome decisões e execute ações diferentes
// com base em condições específicas. 

// 1 Estruturas condicionais
// IF
let idade = 18;

if(idade >= 18){
    console.log("Você é maior de idade!");
}

// 2 else
let idade02 = 16

if (idade02 >= 18) {
    console.log("Voce e maior de idade!");
    
} else {
    console.log("Voce e menor de idade!");
}

// else if
let nota = 75

if (nota >= 90) {
    console.log("Nota A");
} else if (nota >= 70){
    console.log("Nota B"); 
} else {
    console.log("Nota C");
}

// switch
let cor = "verde";

switch (cor) {
    case "vermelho":
        console.log("Pare!");
        break;
    case "amarelo":
        console.log("Atenção!");
        break;
    case "verde":
        console.log("Siga!");
        break;
    default:
        console.log("Cor inválida");
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log("Repetição número " + i);
}

// while
let contador = 0

while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;
}

// Do while
let contador02 = 0;

do {
    console.log("Contador: " + contador02);
    contador02++;
} while (contador02 < 5);


// Exercício
// Crie um programa que:

// 1 - Peça ao usuário para inserir um número.
// 2 - Use um if/else para verificar se o número é par ou ímpar.
// 3 - Use um for para exibir todos os números pares de 1 até o número inserido.
