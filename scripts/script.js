let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value; 

    let totalCarne = carneP(duracao) * adultos + (carneP(duracao) / 2 * criancas);
    let totalCerveja = cervejaP(duracao) * adultos;
    let totalBebida = bebidaP(duracao) * adultos + (bebidaP(duracao)/2 * criancas); 
    
    resultado.innerHTML = `<p>${totalCarne / 1000} Kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalCerveja / 355)} Latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalBebida / 2000)} Garrafas de bebidas</p>`

}
function carneP(duracao) {
    if (duracao >= 6) {
        return 650;
    }else{
        return 400;
    }
}
function cervejaP(duracao) {
    if (duracao >= 6) {
        return 2000;
    }else{
        return 1200;
    }
}
function bebidaP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}
