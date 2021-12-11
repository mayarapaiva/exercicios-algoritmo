// Faça um algoritmo que leia a largura e altura de uma parede, calcule e mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

let largura = Number.parseFloat(window.prompt("Digite a largura da parede, em metros"));
let altura = Number.parseFloat(window.prompt("Digite a altura da parede, em metros"));

let area = largura * altura
let tinta = area / 2

console.log(` A parede tem área igual a ${area} e vai precisar de ${tinta} latas de tinta para pintar tudo.`)