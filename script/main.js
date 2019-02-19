
var card = document.getElementsByClassName('opc')[0];
var text = document.getElementsByClassName('text-card')[0];
var divCardsProjetos = document.getElementById('crd-projetos');
var liBottom = document.getElementById('li-bottom');
var textCenter = document.getElementById('text-center');

var cards = document.getElementsByClassName('opc');

function fadeElementsAndShowS () {
    divCardsProjetos.style.transform = "translateY(15em)";
}

function textCenterFade() {
    textCenter.style.transform = "translateY(15em)";

    setTimeout(function () {
        textCenter.style.transform = "translateY(0)";
    }, 1000)
}



card.addEventListener("click", function () {
    console.log('click');
    text.style.transform = 'translateY(-3em)';
    text.style.transform += 'scale(0.85, 0.85)';
    text.classList.toggle("text-shadow");
    setTimeout(function() {
        divCardsProjetos.classList.toggle("crd-projetos-f");
    }, 250);
   
}, false);

card.addEventListener("mouseout", function () {
    text.style.transform = 'translateY(0)';
    divCardsProjetos.classList.remove("crd-projetos-f");
}, false);



//click Sobre

var header = document.getElementsByTagName('header');
var textDesBottom = document.getElementsByTagName('a');
