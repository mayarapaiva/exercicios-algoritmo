// Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.

let carteira = Number.parseFloat(window.prompt("Quanto dinheiro você tem na carteira agora?"));

let conversao = carteira * 3.45;
let dolar = conversao.toLocaleString("pt-BR", {style:"currency", currency: "USD"});

console.log(` Você pode comprar ${dolar}. `);