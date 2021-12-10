// Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a sua terça parte. Ex: Digite um número: 3.5 -> O dobro de 3.5 é 7.0. A terça parte de 3.5 é 1.16666

let num = Number.parseFloat(window.prompt("Digite um número:"));

let dobro = num * 2;
let terca = num / 3;

console.log(` O dobro de ${num} é ${dobro} e a terça parte de ${num} é ${terca}. `);