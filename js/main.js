'use strict'

const semaforo = document.getElementById('semaforo')
const verde = document.getElementById('verde')
const amarelo = document.getElementById('amarelo')
const vermelho = document.getElementById('vermelho')
const automatico = document.getElementById('automatico')
let idAutomatico = null;


////////////////////////////////////////////////////////////////
const cores = {
    verde: "./img/verde.png",
    vermelho: "./img/vermelho.png",
    amarelo: "./img/amarelo.png",
    desligado: "./img/desligado.png",
}
///////////////////////////////////////////////////////////////////

let interval; // id do intervalo usado no modo automatico
let proximaCor = cores.vermelho;

///////////////////////////////////////////////////////////////////

const semaforoVerde = () => {
    semaforo.src= "/img/verde.png"
}
verde.addEventListener("click", semaforoVerde)

////////////////////////////////////////////////////////////////////

const semaforoAmarelo = () => {
    semaforo.src= "/img/amarelo.png"
}
amarelo.addEventListener("click", semaforoAmarelo)

////////////////////////////////////////////////////////////////////

const semaforoVermelho = () => {
    semaforo.src= "/img/vermelho.png"
}
vermelho.addEventListener("click", semaforoVermelho)

/////////////////////////////////////////////////////////////////////
    

const getProximaCor = () => {
    let proximaCor;

    if (semaforo.src.includes("/img/verde.png")) {
        proximaCor = cores.amarelo;
    } else if (semaforo.src.includes("/img/vermelho.png")) {
        proximaCor = cores.verde;
    } else if (semaforo.src.includes("/img/amarelo.png")) {
        proximaCor = cores.vermelho;
    } else if (semaforo.src.includes("/img/desligado.png")){
        proximaCor = cores.verde;
    }

    return proximaCor;
}

///////////////////////////////////////////////////////////////////////

const ligarAutomatico = () =>{
    if (interval == null) {
        interval = setInterval(() => trocarCor(proximaCor), 1000);
        automatico.textContent = "Parar";
    } else {
        desligarAutomatico()
    }
}
automatico.addEventListener("click", ligarAutomatico)
/////////////////////////////////////////////////////////////////////////////
const desligarAutomatico = () => {
    clearInterval(interval);
    automatico.textContent = "Automático";
    interval = null;
}
////////////////////////////////////////////////////////////////////////

const clickButtonVerde = () =>{
    trocarCor(cores.verde);
    desligarAutomatico();
}

const clickButtonVermelho = () =>{
    trocarCor(cores.vermelho);
    desligarAutomatico();
}

const clickButtonAmarelo = () =>{
    trocarCor(cores.amarelo);
    desligarAutomatico();
}
//////////////////////////////////////////////////////////////////////
const trocarCor = (cor) => {
    semaforo.src = cor
    proximaCor = getProximaCor();
};