var loaderElms = document.querySelector('.loading-elms');
var showElms = document.querySelector('.elms-after-loading');
var loaderElmsCont = document.querySelector('.contElms')
var txtLoader = document.querySelector('.loader-h1');
document.body.classList.add('render');
keyAn = true;


var currentURL = window.location.href;
var s_url_current = currentURL.split('?');

if (s_url_current[1] === 'loader=false' || s_url_current[1] === 'loader=false#') {

    loaderElms.style.display = "none";

    showElms.style.display = "block";
    setTimeout(() => {
        animMainText();
    }, 1000);
} else {

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
    }, 700);

    setStart();
}


function setStart() {
    setTimeout(() => {
        keyAn = false;
    }, 4000);
    setTimeout(() => {
        loaderElmsCont.style.animation = "fadeOut 1s";
        setTimeout(() => {
            loaderElms.style.display = "none";
        }, 1200);

        document.body.classList.remove('render');

        //deixa o Body visivel executando a animacao de fade quando o timer termina

        setTimeout(() => {
            document.body.classList.add('render');
            showElms.style.display = "block";
            setTimeout(() => {
                animMainText();
            }, 1000);
        }, 1500);
    }, 10000);
}