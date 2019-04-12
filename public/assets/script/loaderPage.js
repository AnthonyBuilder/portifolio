var loaderElms = document.querySelector('.loading-elms');
var showElms = document.querySelector('.elms-after-loading');
var loaderElmsCont = document.querySelector('.contElms')
var txtLoader = document.querySelector('.loader-h1');
document.body.classList.add('render');
keyAn = true;

setTimeout(() => {
    txtLoader.style.animation = "fadeOut 1s";
}, 4000);

setTimeout(() => {

    txtLoader.style.animation = "fadeIn 8s";
    txtLoader.style.fontSize = "9vw";
    txtLoader.innerHTML = "Bem-Vindo";

    keyAn = false;
}, 5000);

setInterval(() => {
    if (keyAn === true) {
        progAnim();
    }
}, 1000);

function setStart() {
    setTimeout(() => {

        keyAn = false;
        loaderElmsCont.style.animation = "fadeOut 1s";
        setTimeout(() => {
            loaderElms.style.display = "none";
        }, 2000);

        document.body.classList.remove('render');

        //deixa o Body visivel executando a animacao de fade quando o timer termina
        setTimeout(() => {
            document.body.classList.add('render');
            showElms.style.display = "block";
            setTimeout(() => {
                animMainText();
            }, 500);
        }, 2500);


    }, 10000);
}

setStart();