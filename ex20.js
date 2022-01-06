// Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou ÍMPAR.

let n1 = Number.parseInt(window.prompt("Digite um número inteiro entre 1 e 100:"));

let par = n1 / 2

if (par == 0) {
    console.log(` O número ${par} pertence aos números PARES. `);
} else {
    console.log(` O número ${par} pertence aos números ÍMPARES. `);
}