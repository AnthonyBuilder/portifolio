

var card = document.getElementsByClassName('opc')[0];
var text = document.getElementsByClassName('text-card')[0];
var divCardsProjetos = document.getElementById('crd-projetos');
var liBottom = document.getElementById('li-bottom');
var textCenter = document.getElementById('text-center');

var cards = document.getElementsByClassName('opc');

function textCenterFade() {
    textCenter.style.transform = "translateY(15em)";

    setTimeout(function () {
        textCenter.style.transform = "translateY(0)";
    }, 1000)
}

var header = document.getElementsByTagName('header')[0];
var textsHead = document.getElementsByTagName('a');
var textDesBottom = document.getElementsByTagName('a');
var textMainNome = document.getElementById("text-mainnome");
var body = document.getElementsByTagName('body')[0];

var btnCurriculo = document.getElementById('text-rigth-cpl');

var cardsMainServ = document.getElementById('contents');
var cards2Serv = document.getElementById('cardRow');

var linkAndWhiteWall = function () {
    textsHead[1].style.color = "#52B271";
    if (window.pageYOffset > 500) {
        elementsSwitchToWhite();
    }
    window.onscroll = function () {
        if (window.pageYOffset < 5000) {
            elementsSwitchToBlack();
        }
    }
}

window.onscroll = function () {
    if (window.pageYOffset > 2500) {
        elementsSwitchToWhite();
    }
    if (window.pageYOffset < 2500) {
        elementsSwitchToBlack();

    }
}

function elementsSwitchToWhite() {
    btnCurriculo.style.color = "black";
    btnCurriculo.style.borderColor = "black";
    btnCurriculo.style.backgroundColor = "white";

    body.style.background = "white";
    textsHead[0].style.color = "black";

    textsHead[1].style.color = "black";
    textMainNome.style.color = "black";

    cardsMainServ.style.transform = "translateX(-100em)";

}

function elementsSwitchToBlack() {
    body.style.background = "rgb(19, 19, 19)";
    textsHead[0].style.color = "white";
    textsHead[1].style.color = "white";
    textMainNome.style.color = "white";

    cardsMainServ.style.transform = "translateX(0)";

}

card.addEventListener("click", function () {
    console.log('click');
    text.style.transform = 'translateY(-3em)';
    text.style.transform += 'scale(0.85, 0.85)';
    text.classList.toggle("text-shadow");
    setTimeout(function () {
        divCardsProjetos.classList.toggle("crd-projetos-f");
    }, 250);

}, false);

card.addEventListener("mouseout", function () {
    text.style.transform = 'translateY(0)';
    divCardsProjetos.classList.remove("crd-projetos-f");
}, false);


//click Sobre

