
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
function elsSobreAnim() {
    if (beginElsSobre === true) {
        window.anime({
            targets: '.anim-els-in',
            translateY: [150, 0],
            scale: [0.88, 1],
            duration: 590,
            opacity: 1,
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
            duration: 610,
            opacity: 1,
            delay: (elm, index, t) => index * 70,
            easing: 'easeInOutExpo'
        });
        beginElsServicos = false;
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

