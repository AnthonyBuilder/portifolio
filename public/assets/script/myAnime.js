/**
 * Modulo de animaçoes e transições
 * 
 * @author Anthony José De Almeida Silva
 * @extends Anime.min.js
 */

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
        translateX: [700, 0],

        easing: [0.075, 0.82, 0.165, 1],
        duration: 900,

    });

    anime({
        targets: '.img-prof-rig',
        opacity: 1,
        width: ['166vh', '50vh'],
        duration: 1500,
        elasticity: 50,
        easing: "easeOutElastic",
        complete: () => {
            anime({
                targets: '.img-beffore-ri',
                opacity: [0, 1],
                duration: 4200
            });
        }
    });

    anime({
        targets: '.txt-sub',
        opacity: [0, 1],
        translateY: [200, 0],
        easing: 'easeInOutExpo',
        duration: 1200,
        delay: (elm, index, t) => index * 50
    });

    anime({
        targets: '.txts-top',
        opacity: [0, 1],
        translateY: [100, 0],
        easing: 'easeInOutExpo',
        duration: 900,
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

//Cria um <span> com os chars do 'h1' e atribuindo a animação a cada <span>

$('.text-main').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});


function animMainText() {
    anime.timeline({
        loop: false
    })
        .add({
            targets: '.text-main .letter',
            translateX: [50, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1500,
            delay: function (el, i) {
                return 500 + 30 * i;
            },
            complete: () => {
                setTimeout(() => {
                    anime({
                        targets: '.text-main .letter',
                        easing: "easeOutExpo",
                        color: {
                            value: (el, i, t) => {
                                const color = `rgb(19, 19, 19)`;
                                return color;
                            },
                            easing: 'linear',
                            duration: 900,
                        },
                        duration: 700,
                        delay: function (el, i) {
                            return 500 + 30 * i;
                        },
                    });

                    anime({
                        targets: '.scene',
                        opacity: [0, 1],
                        easing: 'linear',
                        duration: 700,
                        delay: function (el, i) {
                            return 500 + 30 * i;
                        },
                        complete: () => {

                            anime({
                                targets: '.row-bottom-txts .txt-main-bottom',
                                translateX: [50, 0],
                                translateZ: [10, 0],
                                opacity: [0, 1],
                                easing: "easeOutExpo",
                                color: {
                                    value: (el, i, t) => {
                                        const color = `rgb(27, 27, 27)`;
                                        return color;
                                    },
                                    easing: 'linear',
                                    duration: 1000,
                                },
                                duration: 1200,
                                delay: function (el, i) {
                                    return 500 + 30 * i;
                                },

                                complete: () => {
                                    anime({
                                        targets: '.anim-header-itm',
                                        opacity: [0, 1],
                                        duration: 950,

                                        translateY: [-70, 0],
                                        easing: 'easeInOutExpo',
                                        delay: function (el, i) {
                                            return 200 + 50 * i;
                                        }
                                    })
                                }
                            });
                        }
                    });
                }, 1000);

            }
        });

}