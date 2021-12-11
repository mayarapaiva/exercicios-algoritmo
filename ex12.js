//Crie um programa que leia o preço de um produto, calcule e mostre o seu PREÇO PROMOCIONAL, com 5% de desconto.

let preco = Number.parseFloat(window.prompt("Quanto custa o produto?"));

let promocao = preco * 0.95;

let valor = promocao.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

console.log(` Este produto está com desconto e você só vai pagar ${valor} `);