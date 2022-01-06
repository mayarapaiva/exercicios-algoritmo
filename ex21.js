//21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não BISSEXTO.

let ano = Number.parseInt(window.prompt("É bissexto ou não? Digite o ANO: (com 4 algarismos)"));

let bissexto = ano % 4;

if (bissexto == 0) {
    console.log(` ${ano} é bissexto `);
} else {
    console.log(` ${ano} não é bissexto `);
}