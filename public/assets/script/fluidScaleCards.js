
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
                duration: 1200,
            },
            translateY: [900, 0],
            duration: 800,
            delay: (elm, index, t) => index * t,
            easing: 'easeInOutExpo',
        });

        beginFeeds = false;
    }
}


