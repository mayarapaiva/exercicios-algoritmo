// Desenvolva uma lógica que leia os valores de A, B e C de uma equação do segundo grau e mostre o valor de Delta.

let a = Number.parseFloat(window.prompt("Valor de A"));
let b = Number.parseFloat(window.prompt("Valor de B"));
let c = Number.parseFloat(window.prompt("Valor de C"));

let delta = (b * b) - (4 * a * c);

console.log(` O valor de delta é ${delta} `);