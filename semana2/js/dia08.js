// Criação de arrays - revisão

// Arrays são usados para armazenar vários valores em uma
// unica variável

// Criação de arrays básicos
// Array de número
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  Array de strings
let frutas = [
    "Maça",
    "Banana",
    "Melancia"
]
console.log(frutas);
// [ 'Maça', 'Banana', 'Melancia' ]

// Array vazio, preenchido depois
let carros = []
carros[0] = "BMW"
carros[1] = "Ferrari"
console.log(carros);
// [ 'BMW', 'Ferrari' ]

// Acessando elementos de um array
console.log(numeros[0]); // 0
console.log(frutas[1]); // Banana

// Exibir o tamanho do array
console.log(numeros.length); // 11

// Modificar elementos de um array
numeros[2] = 100
console.log(numeros);
// [0, 1, 100, 3, 4, 5, 6, 7, 8, 9, 10]

// Iterando sobre arrays usando loops
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]); // Maça Banana Melancia

}

// Como criar um array bidimensional(Matriz)
let matriz = [
    // Colunas 0, 1, 2  
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9] // Linhas 0, 1, 2
]
console.log(matriz);
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// Acessando elemento de uma matriz
console.log(matriz[0][1]); // 2
console.log(matriz[2][2]); // 9

// Percorrendo uma matriz
console.log("Elementos da matriz: ");
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}
// 1, 2, 3, 4, 5, 6, 7, 8, 9

