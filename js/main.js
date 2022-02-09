'use strict'

const semaforo = document.getElementById('semaforo')
const verde = document.getElementById('verde')
const amarelo = document.getElementById('amarelo')
const vermelho = document.getElementById('vermelho')
const automatico = document.getElementById('automatico')
let idAutomatico = null;

////////////////////////////////////////////////////////////////////

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
    

    const ligarDesligar = () =>{
        
        if(semaforoVerde()){
            amarelo()         
        }else if (semaforoAmarelo){
             vermelho()
        }else if (semaforoVermelho){
             verde()
         }
        else{
            amarelo()   
        }  
    }
///////////////////////////////////////////////////////////////////////

const automaticoLigado = () => {
    if(idAutomatico == null){
          idAutomatico = setInterval(ligarDesligar, 500)  
    }else {
        clearInterval(idAutomatico)
        idAutomatico = null
    }  

}
automatico.addEventListener('click',automaticoLigado)