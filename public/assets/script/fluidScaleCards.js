
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


