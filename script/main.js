
var card = document.getElementsByClassName('opc')[0];
var text = document.getElementsByClassName('text-card')[0];
var divCardsProjetos = document.querySelectorAll('crd-projetos');

card.addEventListener("click", function () {
    console.log('click');
    text.style.transform = 'translateY(-3em)';


}, false);


function show(elementToFade) {

    var element = document.querySelector(elementToFade);
    element.classList.add("wrapper-elements-fade-in");


}

window.loaded(show('wrapper-elements'));