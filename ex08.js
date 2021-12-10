/*
Desenvolva um programa que leia uma distância em metros e mostre os valores relativos em outras medidas.
Ex:
Digite uma distância em metros: 185.72
A distância de 185.7m corresponde a: 
0.18572Km 
1.8572Hm
18.572Dam
1857.2dm 
18572.0cm 
185720.0mm
*/

let num = Number.parseFloat(window.prompt("Digite uma distância, em metros:"));

let km = num / 1000
let hm = num / 100
let dam = num / 10
let dm = num * 10
let cm = num * 100
let mm = num * 1000

console.log(` A distância de ${num}m corresponde a ${km}km `);
console.log(` A distância de ${num}m corresponde a ${hm}hm `);
console.log(` A distância de ${num}m corresponde a ${dam}dam `);
console.log(` A distância de ${num}m corresponde a ${dm}dm `);
console.log(` A distância de ${num}m corresponde a ${cm}cm `);
console.log(` A distância de ${num}m corresponde a ${mm}mm `);
