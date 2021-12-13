//Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

let velocidade = Number.parseInt(window.prompt("Qual a velocidade atingida, em km/h ?"));

let multa = (velocidade - 80) * 5;
let moeda = multa.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

if (velocidade > 80) {
    console.log(` Você ultrapassou o limite de velocidade, por isso, sua multa está no valor de ${moeda}`);
} else {
    console.log(`Parabéns, você é um ótimo motorista! Não ultrapassou o limite de velocidade.`);
}

