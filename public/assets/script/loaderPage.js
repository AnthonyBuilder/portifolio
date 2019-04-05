function callAnim() {
    elsSobreAnim(0);
    beginElsSobre = true;

    boxAnimation(0, 0);
    begin = true;
}

var loaderElms = document.querySelector('.loading-elms');
var showElms = document.querySelector('.elms-after-loading');

document.body.classList.add('render');


keyAn = true;
setInterval(() => {
    if (keyAn === true) {
        progAnim();
    }
}, 1300);

function setStart() {
    setTimeout(() => {
        keyAn = false;
        loaderElms.style.animation = "fadeOut 1s";
        setTimeout(() => {
            loaderElms.style.display = "none";
        }, 1000);

        document.body.classList.remove('render');

        //deixa o Body visivel executando a animacao de fade quando o timer termina
        setTimeout(() => {
            document.body.classList.add('render');
            showElms.style.display = "block";
        }, 1300);


    }, 10000);
}

setStart();
callAnim();