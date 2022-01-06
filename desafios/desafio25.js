/*
[DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas
retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.
*/

let retaA = Number(window.prompt("Tamanho da reta A: (em centímetros): "));
let retaB = Number(window.prompt("Tamanho da reta B: (em centímetros): "));
let retaC = Number(window.prompt("Tamanho da reta C: (em centímetros): "));

let opcao1 = retaA < (retaB + retaC);
let opcao2 = retaB < (retaA + retaC);
let opcao3 = retaC < (retaA + retaB);


if ( (opcao1 == true) && (opcao2 == true) && (opcao3 == true) ) {
    document.write("É um triângulo");
} else {
    document.write("Não pode ser um triângulo");
}


