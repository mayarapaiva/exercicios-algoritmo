/*
Faça um programa que leia as duas notas de um aluno em uma materia e mostre na tela a sua média na disciplina.
Ex:
Nota 1: 4.5
Nota 2: 8.5
A média entre 4.5 e 8.5 é igual a 6.5
*/ 

let nota1 = Number.parseFloat(window.prompt("Digite a nota da prova:"));
let nota2 = Number.parseFloat(window.prompt("Digite a nota do trabalho:"));

let media = Number.parseFloat((nota1 + nota2)/2);

console.log(` A média entre ${nota1} e ${nota2} é ${media}.`);