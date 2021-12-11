//Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento.

let salario = Number.parseFloat(window.prompt("Digite seu salario atual"));

let aumento = salario + (salario * 0.15);

let moeda = aumento.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

console.log(` Seu novo sálário será de ${moeda}`);