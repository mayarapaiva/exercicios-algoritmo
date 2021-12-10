//Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor. Ex: O antecessor de 9 é 8. O sucessor de 9 é 10.

let num = Number.parseInt(window.prompt("Digite um número inteiro:"));

let antes = num - 1;
let depois = num + 1;

console.log(` O antecessor de ${num} é ${antes}. O sucessor de ${num} é ${depois}. `)