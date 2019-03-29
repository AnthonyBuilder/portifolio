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
            targets: '.dtxts-sec-sobre',
            scale: [.4, 1],

            duration: 900,
            opacity: 1,
            color: {
                value: (el, i, t) => {
                    const color = "#fff";
                    return color;
                },
                easing: 'linear',
                duration: 900,
            },
            delay: (elm, index, t) => index * 2100,
            easing: 'easeInOutQuad'
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
            translateY: [-350, 0],
            duration: 200,
            opacity: 1,
            delay: (elm, index, t) => index * 70,
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


function imgsSwitchSobreOut() {
    window.anime({
        targets: '.img-profile',
        translateX: [0, -300],
        duration: 800,
        opacity: [1, 0],
        delay: (elm, index, t) => index * 70,
        easing: 'easeInOutExpo',

    });
}

function imgsSwitchSobreInOut(dur) {
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
}



function progAnim() {
    window.anime({
        targets: '.prog-anim',
        translateX: [-700, 0],
        scaleX: [.3, 1.2],
        scaleY: [.8, 1],
        duration: 550,
        opacity: [0, 1],
        easing: [0.77, 0, 0.175, 1],
        filter: ['blur(20px)', 'blur(0px)'],

        complete: function () {
            anime({
                targets: '.prog-anim',
                translateX: [0, 700],
                scaleX: [1.2, .3],
                scaleY: [1, .8],
                duration: 550,
                opacity: [1, 0],
                easing: [0.77, 0, 0.175, 1],
                filter: ['blur(0px)', 'blur(20px)'],
            });
        }

    });
}