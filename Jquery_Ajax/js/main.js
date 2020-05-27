/*
baixar pacote jquery  e incluir no projeto
*/

window.onload = function () {

    var btn1 = document.getElementById("btn1");
    btn1.onclick = function () { consultaCep(); };

    //oculta a  tabela enquanto vazia
    $(function () {
        $(".classCep").hide();
    });
}

function consultaCep() {

    var cep = document.getElementById("txtcep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            //popularCep(response); 
            popularCepJquery(response);
        }
    })
}
function popularCep(res) {
    var endereco = document.getElementById("endereco");

    var p = document.createElement("p");
    p.appendChild(document.createTextNode("Endereco"));
    endereco.appendChild(p);

    var p1 = p.cloneNode(false);
    p1.appendChild(document.createTextNode("CEP : " + res.cep));
    endereco.appendChild(p1);

    var p2 = p.cloneNode(false);
    p2.appendChild(document.createTextNode("Logradouro : " + res.logradouro));
    endereco.appendChild(p2);

    var p3 = p.cloneNode(false);
    p3.appendChild(document.createTextNode("Complemento : " + res.complemento));
    endereco.appendChild(p3);

    var p4 = p.cloneNode(false);
    p4.appendChild(document.createTextNode("Bairro : " + res.bairro));
    endereco.appendChild(p4);

    var p5 = p.cloneNode(false);
    p5.appendChild(document.createTextNode("Cidade : " + res.localidade));
    endereco.appendChild(p5);

    var p6 = document.createElement("p");
    p6.id = "uf"
    //p6.appendChild(document.createTextNode("UF : " + res.uf));            
    endereco.appendChild(p6);
    $("#uf").html("UF : " + res.uf);
}

function popularCepJquery(res) {

    $("#cep").html(res.cep);
    $("#logradouro").html(res.logradouro);
    $("#bairro").html(res.bairro);
    $("#cidade").html(res.localidade);
    $("#uf").html(res.uf);
    $("#complemento").html(res.complemento);
    //mostrar o resultado na tela pois o  $(".classCep").hide(); oculta
    $(".classCep").show();
}
