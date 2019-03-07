

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

window.onload = function () {

    let elm = document.querySelector('#githubsec');
    let satelite = document.getElementsByClassName('svg_53');

    satelite[0].style.transition = "6100ms ";
    satelite[1].style.transition = "6400ms ";
    satelite[2].style.transition = "6600ms ";
    satelite[3].style.transition = "6800ms ";
    satelite[4].style.transition = "7100ms ";

    var onScroll = (function () {
        var startPos = 1450;

        function run() {
            var fromTop = window.pageYOffset,
                scrollDelta;

            scrollDelta = (fromTop - startPos) * 1; // "velocidade" em funcao do scroll
            elm.style.backgroundSize = `${scrollDelta}px ${scrollDelta}px`;
            //elm.style.transition = `${scrollDelta - 1500}ms`;
            console.clear();
            console.log(scrollDelta);
        }

        run();

        return run;
    })()


    window.addEventListener('scroll', onScroll);


    window.onscroll = function () {
        if (window.pageYOffset > 2500) {

            textsHead[0].style.animation = null;
            textsHead[1].style.color = "#52B271";
            textsHead[1].style.animation = "flash 2.6s infinite cubic-bezier(0.77, 0, 0.175, 1)";
            textsHead[2].style.animation = null;

            elementsSwitchToWhite();
        }

        if (window.pageYOffset < 2500) {

            textsHead[0].style.color = "#52B271";
            textsHead[0].style.animation = "flash 2.6s infinite cubic-bezier(0.77, 0, 0.175, 1)";
            textsHead[1].style.animation = null;
            textsHead[2].style.animation = null;
            textsHead[2].style.color = "white";

            elementsSwitchToBlack();
        }

        if (window.pageYOffset < 1500) {
            textsHead[0].style.color = "white";
            textsHead[0].style.animation = null;

        }
        if (window.pageYOffset > 3050) {

            textsHead[0].style.animation = null;
            textsHead[0].style.color = "white";
            textsHead[1].style.animation = null;
            textsHead[2].style.color = "#52B271";
            textsHead[2].style.animation = "flash 2.6s infinite cubic-bezier(0.77, 0, 0.175, 1)";

            satelite[0].style.transform = "translate(-1100px, -1200px)";
            satelite[1].style.transform = "translate(-200px, -1200px)";
            satelite[2].style.transform = "translate(600px, -1200px)";
            satelite[3].style.transform = "translate(100px, -1200px)";
            satelite[4].style.transform = "translate(900px, -1200px)";

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
    var form = document.getElementsByTagName('form')[0];

    function inputConstructor(el) {
        el.style.animation = "fadeInLeft 1.4s cubic-bezier(0.77, 0, 0.175, 1)";
        el.style.display = "block";
        el.style.margin = "23px 19.5em";
    }

    //Ajax fazendo conexao com o banco para capturar e registrar os Feedbacks
    var xhttp = new XMLHttpRequest();



    function getFeeds() {
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var feeds = JSON.parse(this.responseText);
                console.log(feeds);
            }
        }

        xhttp.open('GET', 'ajax/feed.php', true);
        xhttp.send();
    }

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
                    inputConstructor(doc[1]);
                    tr = true;

                    setTimeout(() => {
                        doc[1].style.animation = null;
                    }, 1350);
                }
            }, 1350);


        } else if (tr && e.keyCode == 13) {
            form.submit();
            doc[1].style.animation = animConfigZoomOut;

            callFlashTxt();
            setTimeout(() => {
                txtFed.innerHTML = "Feedbacks";
                getFeeds();
            }, 200);


            setTimeout(function () {

                doc[1].style.display = "none";
                txtFed.style.transform = "translateY(-6.5em)";
                feedComentsDiv.style.animation = "slideInUp 1.3s cubic-bezier(0.77, 0, 0.175, 1)";
                setInterval(() => { feedComentsDiv.style.display = "block"; }, 300);

            }, 1295);
        }
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
