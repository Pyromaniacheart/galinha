const botão = document.getElementById(modoClaroModoescuro);

const NOME = "Anderson Bernardo";
let tituloProfissional = "Garoto de Programa / Faço de Tudo";
let minhaBio = "sou um cara esforçado. Agora sou baterista" +
 "Antes eu não era nada."
let anoFormatura = 2028;
let anoIngresso = 2025;
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
document.getElementById("anoFormatura").innerText = anoFormatura;