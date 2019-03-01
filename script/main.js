

var card = document.getElementsByClassName('opc')[0];
var text = document.getElementsByClassName('text-card')[0];
var divCardsProjetos = document.getElementById('crd-projetos');
var liBottom = document.getElementById('li-bottom');
var textCenter = document.getElementById('text-center');

var cards = document.getElementsByClassName('opc');
var header = document.getElementsByTagName('header')[0];
var textsHead = document.getElementsByTagName('a');
var textDesBottom = document.getElementsByTagName('a');
var textMainNome = document.getElementById("text-mainnome");
var body = document.getElementsByTagName('body')[0];

var btnCurriculo = document.getElementById('text-rigth-cpl');

var cardsMainServ = document.getElementById('contents');
var cards2Serv = document.getElementById('cardRow');

function textCenterFade() {
    textCenter.style.transform = "translateY(15em)";

    setTimeout(function () {
        textCenter.style.transform = "translateY(0)";
    }, 1000)
}


window.onscroll = function () {
    if (window.pageYOffset > 2500) {

        textsHead[0].style.animation = null;
        textsHead[1].style.color = "#52B271";
        textsHead[1].style.animation = "flash 3.6s infinite cubic-bezier(0.77, 0, 0.175, 1)";
        textsHead[2].style.animation = null;

        elementsSwitchToWhite();
    }

    if (window.pageYOffset < 2500) {

        textsHead[0].style.color = "#52B271";
        textsHead[0].style.animation = "flash 3.6s infinite cubic-bezier(0.77, 0, 0.175, 1)";
        textsHead[1].style.animation = null;
        textsHead[2].style.animation = null;
        textsHead[2].style.color = "white";
        elementsSwitchToBlack();
    }

    if (window.pageYOffset < 1500) {
        textsHead[0].style.color = "white";
        textsHead[0].style.animation = null;
    }
    if (window.pageYOffset > 4300) {

        textsHead[0].style.animation = null;
        textsHead[0].style.color = "white";
        textsHead[1].style.animation = null;
        textsHead[2].style.color = "#52B271";
        textsHead[2].style.animation = "flash 3.6s infinite cubic-bezier(0.77, 0, 0.175, 1)";

        elementsSwitchToBlack();
    }
}

function elementsSwitchToWhite() {
    body.style.background = "white";
    textsHead[0].style.color = "black";
    textsHead[2].style.color = "black";
    textMainNome.style.color = "black";

    cardsMainServ.style.transform = "translateX(-50em)";
    cardsMainServ.style.opacity = 1;
}

function elementsSwitchToBlack() {
    body.style.background = "rgb(19, 19, 19)";

    textsHead[1].style.color = "white";

    textMainNome.style.color = "white";

    cardsMainServ.style.transform = "translateX(0)";
    cardsMainServ.style.opacity = 0;
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

let tr = false;
var doc = document.getElementsByClassName('in-feed');
var txtFed = document.getElementsByClassName('feed-txt')[0];
var feedComentsDiv = document.getElementsByClassName('feedbacks-coments')[0];

function checkSubmit(e) {
    var animConfigZoomOut = "zoomOutRight 1.4s cubic-bezier(0.77, 0, 0.175, 1)";

    function callFlashTxt() {
        txtFed.style.animation = "flash 1.1s cubic-bezier(0.77, 0, 0.175, 1)";
    }

    if (!tr && e.keyCode == 13) {
        doc[0].style.animation = animConfigZoomOut;
        callFlashTxt();
        setTimeout(() => { txtFed.innerHTML = "Escreva seu nome"; }, 200);
        setTimeout(function () {
            doc[0].style.display = "none";
            txtFed.style.animation = null;

            //txtFed.style.display = "none";
            if (!tr) {
                doc[1].style.animation = "fadeInLeft 1.4s cubic-bezier(0.77, 0, 0.175, 1)";
                doc[1].style.display = "block";
                doc[1].style.margin = "23px 19.5em";
                tr = true;

                setTimeout(() => {
                    doc[1].style.animation = null;
                }, 1350);
            }
        }, 1350);

    } else if (tr && e.keyCode == 13) {
        doc[1].style.animation = animConfigZoomOut;
        callFlashTxt();
        setTimeout(() => { txtFed.innerHTML = "Feedbacks"; }, 200);

        setTimeout(function () {
            doc[1].style.display = "none";
            txtFed.style.transform = "translateY(-6em)";
            feedComentsDiv.style.animation = "slideInUp 1.3s cubic-bezier(0.77, 0, 0.175, 1)";
            setInterval(() => { feedComentsDiv.style.display = "block"; }, 300);
        }, 1295);
    }
}


// class cardScaleHover {
//     constructor(el) {
//         this.DOM = {}
//         this.DOM.el = el;
//         this.hover();
//     }

//     hover() {
//         this.el.addEventListener('mouseover', function () { this.el.style.transform = "scale(1.05, 1.05)"; })
//     }
// }

// new cardScaleHover(document.querySelector('div.crd'));
