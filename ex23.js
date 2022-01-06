/*
Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos para todos, mas especialmente para mulheres. Faça um programa que leia nome, sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo que:
- Homens ganham 5% de desconto
- Mulheres ganham 13% de desconto
*/

let nome = window.prompt("Nome do Cliente:");
let genero = Number.parseInt(window.prompt("Gênero do Cliente: (1) Feminino ou (2) Masculino"));
let conta = Number.parseFloat(window.prompt("Valor da compra:"));

let mulher = conta * 0.87;
let homem = conta * 0.95;
let mulherMoeda = mulher.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
let homemMoeda = homem.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

if (genero == 1) {
    console.log(` ${nome}, sua fatura, COM DESCONTO, é de ${mulherMoeda} `);
} else if (genero == 2){
    console.log(` ${nome}, sua fatura, COM DESCONTO, é de ${homemMoeda} `);
} else{
    console.log("Digite um valor válido para Gênero, entre 1 e 2.");
}
