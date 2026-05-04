const botão = document.getElementById(modoClaroModoescuro);

const NOME = "Anderson Bernardo";
let tituloProfissional = "Garoto de Programa / Faço de Tudo";
let minhaBio = "sou um cara esforçado. Agora sou baterista" +
 "Antes eu não era nada."
let anoFormatura = 2028;

let mesFormatura = 12;
let diaFormatura = 31;
let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;

let dataAual = new Date(); //Data Atual, data completa, biblioteca de dados do javascript
let mesAtual = dataAual.getMonth() +1; //Mês atual (0-11, por isso +1)
let anoAtual = dataAual.getFullYear(); //ano atual
let diaAtual = dataAual.getDate(); //dia atual

let indefinido;
let nulo = null;
let curso = {
    nome: "Sistemas de Informação",
    semestre: 3,
    disciplinaAtual: "Design focado no usuário"
};

console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = "Ano de Formatura: " + anoFormatura;
document.getElementById("tempoRestante").innerText = "Tempo Restante: " + (anoFormatura - anoAtual) + " anos";


