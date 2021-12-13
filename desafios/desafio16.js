//16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

let cigarroDia = Number.parseInt(window.prompt("Quantos cigarros você fuma por dia?"));
let anosFumando = Number.parseInt(window.prompt("Há quantos anos você é fumante?"));

let qttTotalCigarro = (cigarroDia * 365) * anosFumando;
let vidaPerdida = (qttTotalCigarro * 10) / 1440;

//1 dia = 24 horas = 1440 minutos


console.log(` quantidade total de cigarros fumados até hoje ${qttTotalCigarro}`);
console.log(` você perdeu ${vidaPerdida} dias fumando`);