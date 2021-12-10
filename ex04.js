//Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles. Ex: Digite um valor: 8 Digite outro valor: 5 A soma entre 8 e 5 é igual a 13.

let n1 = Number.parseInt(window.prompt("Digite um número inteiro:"));
let n2 = Number.parseInt(window.prompt("Digite outro número também inteiro:"));

let soma = n1 + n2

console.log(` A soma entre ${n1} e ${n2} é ${soma}. `);