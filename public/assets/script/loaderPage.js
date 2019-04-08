var loaderElms = document.querySelector('.loading-elms');
var showElms = document.querySelector('.elms-after-loading');
var loaderElmsCont = document.querySelector('.contElms')
document.body.classList.add('render');


keyAn = true;
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
        }, 5500);


    }, 10000);
}

setStart();