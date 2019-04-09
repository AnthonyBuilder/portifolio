begin = true;

function boxAnimation() {
    if (begin === true) {
        const boxesAnimation = window.anime({
            targets: '.crd',
            translateX: [1750, 0],
            duration: 1090,
            delay: (elm, index, t) => index * 260 - t,
            easing: 'easeInOutExpo'
        });
        begin = false;
    }
}

beginFeeds = true;

function boxFeedsAnimation() {
    if (beginFeeds === true) {
        const boxesAnimation = window.anime({
            targets: '.card-coments',
            backgroundColor: {
                value: (el, i, t) => {
                    const color = `rgb(27, 27, 27)`;
                    return color;
                },
                easing: 'linear',
                duration: 800,
            },
            translateY: [900, 0],
            duration: 800,
            delay: (elm, index, t) => index * t,
            easing: 'easeInOutExpo',
        });
        beginFeeds = false;
    }
}



beginTxts = true;

function txtsSobreAnim() {
    if (beginTxts === true) {
        window.anime({
            targets: '.els-anim-moj',
            translateY: [300, 0],
            duration: 800,
            opacity: 1,
            color: {
                value: (el, i, t) => {
                    const color = "#fff";
                    return color;
                },
                easing: 'linear',
                duration: 600,
            },
            delay: (elm, index, t) => index * 300,
            easing: 'easeInOutExpo'
        });
        beginTxts = false;
    }
}


beginElsSobre = true;

function elsSobreAnim(opc) {
    if (beginElsSobre === true) {
        window.anime({
            targets: '.anim-els-in',
            translateY: [150, 0],
            scale: [0.88, 1],
            duration: 590,
            opacity: opc,
            delay: (elm, index, t) => index * 10,
            easing: 'easeInOutExpo'
        });
        beginElsSobre = false;
    }
}

beginElsServicos = true;

function elsServicosAnim() {
    if (beginElsServicos === true) {
        window.anime({
            targets: '.anim-els-in-serv',
            translateY: [150, 0],
            scale: [0.78, 1],
            duration: 580,
            opacity: 1,
            easing: 'easeInOutExpo'
        });
    }
    beginElsServicos = false;
}


function elsServiBeffAnim() {
    if (beginElsServicos === true) {
        window.anime({
            targets: '.anim-els-in-serv-beff',
            translateY: [150, 0],
            scale: [0.78, 1],
            duration: 605,
            opacity: .75,
            easing: 'easeInOutExpo'
        });
    }
}

beginElsimgSobr = true;

function elsSobreAnimImg() {
    if (beginElsimgSobr === true) {
        window.anime({
            targets: '.int-sobre',
            duration: 1200,
            opacity: 1,
            easing: 'easeInOutExpo'
        });
        beginElsimgSobr = false;
    }
}

beginElsGitSec = true;

function elsAnimGitSec() {
    if (beginElsGitSec === true) {
        window.anime({
            targets: '.anim-gitsec',
            translateY: [270, 0],
            duration: 800,
            opacity: 1,
            delay: (elm, index, t) => index * 70,
            easing: 'easeInOutExpo'
        });
        beginElsGitSec = false;
    }
}

function arrowHov() {
    anime({
        targets: '.mt-ic-arrow',
        translateX: [-100, 15, 0],
        duration: 600,
        easing: 'easeInOutExpo'
    });
}

function outContSobre() {
    anime({
        targets: '.container-sobre',
        opacity: [1, 0],
        translateX: [0, -300],
        duration: 1100,
        easing: 'easeInOutExpo',
        delay: (elm, index, t) => index * 50,
        complete: function () {
            contSobreInfo.style.display = 'block';
            inContSobInfo()
            contSobre.style.display = 'none';
        }
    });
}

function inContSobre() {
    anime({
        targets: '.container-sobre',
        opacity: [0, 1],
        translateX: [-1500, 0],
        duration: 1100,
        easing: 'easeInOutExpo',
        delay: (elm, index, t) => index * 50,

    });
}

function inContSobInfo() {
    anime({
        targets: '.sec-ant-fts',
        opacity: [0, 1],
        translateX: [1000, 0],
        scale: [.8, 1],
        easing: 'easeInOutExpo',
        duration: 1000
    });

    anime({
        targets: '.txt-sub',
        opacity: [0, 1],
        translateY: [200, 0],
        easing: 'easeInOutExpo',
        duration: 1200,
        delay: (elm, index, t) => index * 50
    });
}

function outContSobInfo() {
    anime({
        targets: '.sec-ant-fts',
        opacity: [1, 0],
        translateX: [0, 1500],
        easing: 'easeInOutExpo',
        duration: 1000,
        complete: function () {
            contSobre.style.display = 'block';
            contSobreInfo.style.display = 'none';
            inContSobre()
        }
    });
}

/**
 * function imgsSwitchSobreInOut(dur) {
    window.anime({
        targets: '.img-profile',
        translateX: [0, -300],
        duration: dur,
        opacity: [1, 0],
        easing: [0.77, 0, 0.175, 1],
        complete: function () {
            anime({
                targets: '.img-profile',
                translateX: [300, 0],
                duration: dur,
                opacity: [0, 1],
                easing: [0.77, 0, 0.175, 1],
            });
        }
    });
}*
*/



function progAnim() {
    window.anime({
        targets: '.prog-anim',
        translateX: [-700, 0],
        scaleX: [.3, 1.2],
        scaleY: [.8, 1],
        duration: 500,
        opacity: [0, 1],
        easing: [0.77, 0, 0.175, 1],

        complete: function () {
            anime({
                targets: '.prog-anim',
                translateX: [0, 700],
                scaleX: [1.2, .3],
                scaleY: [1, .8],
                duration: 400,
                opacity: [1, 0],
                easing: [0.77, 0, 0.175, 1],
            });
        }
    });
}