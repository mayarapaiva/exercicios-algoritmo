// A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

let distancia = Number.parseFloat(window.prompt("Digite aqui a distância percorrida, em km"));
let tempo = Number.parseInt(window.prompt("Digite o tempo de aluguel, em dias, "));

let precoAluguel = (distancia * 90) + (tempo * 0.2);
let moeda = precoAluguel.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

console.log(` O valor total do aluguel é de ${moeda}`);

