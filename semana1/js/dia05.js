// Loops (for, while, do while)
// Exercício: Criar um programa que imprime números pares entre 1 e 100.

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log("");


let w = 1
while (w <= 100) {
    if ( w % 2 == 0) {
        console.log(w);
    }
    w ++;
}
console.log("");


let y = 1
do {
    if ( y % 2 === 0) {
        console.log(y);
    }
    y++;
} while (y <= 100);

// Todos esses exemplos têm a mesma função: iterar de 1 a 100 
// e verificar se o número atual é par (divisível por 2).
//  Se for, ele imprime o número no console.