//19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua média e mostre na tela. No final, analise a média e mostre se o aluno teve ou não um bom aproveitamento (se ficou acima da média 7.0).

let nota1 = Number.parseFloat(window.prompt("Digite a nota da primeira avaliação "));
let nota2 = Number.parseFloat(window.prompt("Agora, digite a nova da última avaliação ?"));

let media = (nota1 + nota2) / 2

if (media > 7) {
    console.log(`Parabéns, sua média foi de ${media} `);
} else {
    console.log(` Que pena, você não alcancou a média 7. Sua nota foi de ${media} `);
}