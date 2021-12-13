//15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.

let tempo = Number.parseInt(window.prompt("Digite aqui o número, em dias, dos dias trabalhados no mês:"));

//salario por dia = 8 * 25 = 200,00

let salarioMes = tempo * 200;

let moeda = salarioMes.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

console.log(` O seu salário é de ${moeda}`);