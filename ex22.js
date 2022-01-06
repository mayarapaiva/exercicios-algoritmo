/*
Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua situação em relação ao alistamento militar.
- Se estiver antes dos 18 anos, mostre em quantos anos faltam para o alistamento.
- Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do alistamento.
*/

let nasc = Number.parseInt(window.prompt("Ano de nascimento (com 4 algarismos):"));

let ano = new Date();
const anoVigorante = ano.getFullYear();
//document.write(anoVigorante);

let militar = anoVigorante - nasc;
let falta = 18 - militar;
let passou = militar - 18

if (militar < 18) {
    console.log(` Nascimento em ${nasc}: Falta(m) ${falta} ano(s) para você se alistar... `);
  } else if (militar == 18) {
    console.log(` Nascimento em ${nasc}: Voce ja pode se alistar!! `);
  } else {
    console.log(` Nascimento em ${nasc}: Se passaram ${passou} anos do seu alistamento!!! `);
  }