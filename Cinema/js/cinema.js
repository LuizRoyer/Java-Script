/* 
sistema para selecionar poltronas disponiveis no cinema
*/
const LIVRE = "https://construindodecor.com.br/wp-content/uploads/2014/10/poltrona-egg-revestida-de-tecido-suede-verde.jpg";
const OCUPADA = "https://www.mobiliedesign.it/90-large_default/sedia-egg-chair.jpg";
const SELECIONADA = "https://shopfacil.vteximg.com.br/arquivos/ids/2090022/Poltrona-Egg-Azul---House-Deccor_0.jpg?v=635842372191100000";
let = poltronas = [false, true, false, true, true, true, false, true, false];

//seleciona as poltronas e tras um Array
const imagens = document.getElementsByTagName("img");

//funcao para carregar a tela ao Inicializar
window.onload = function () {  
    carregarPoltronas();
};

function carregarPoltronas() {
    for (var i = 1; i < imagens.length; i++) {
        imagens[i].id = "poltronas";

        if (poltronas[i-1]) {
            imagens[i].src = LIVRE;

        } else {
            imagens[i].src = OCUPADA;
        }
    }
};

function SelecionarAcento(i) {

    if (poltronas[i]) {
        if (confirm("Certeza que Gostaria deste Acento")) {
            imagens[i+1].src = SELECIONADA;          
        } else {
            imagens[i+1].src = LIVRE;           
        }
    }
}
