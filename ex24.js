//Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais longas.

let distancia = Number(window.prompt("Qual a distância percorrida? (em km): "));

let peq = distancia * 0.5;
let peqMoeda = peq.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

let gde = distancia * 0.45;
let gdeMoeda = gde.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

if (distancia < 200 ) {
    document.write(` você vai pagar ${peqMoeda} pelos ${distancia}km percorridos. `);
} else if (distancia >= 200) {
    document.write(` você vai pagar ${gdeMoeda} pelos ${distancia}km percorridos. `);
} else {
    document.write("Vem fazer uma viagem com a gente!");
}