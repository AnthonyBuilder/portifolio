beginFeeds = true;
function boxFeedsAnimation() {

    const boxesAnimation = window.anime({
        targets: '.servico-main',
        translateY: [1200, 0],
        duration: 1000,
        delay: (elm, index, t) => index * t,
        easing: 'easeInOutExpo',
    });
}



window.onload = function () {
    boxFeedsAnimation();
    document.documentElement.className = "js";
    setTimeout(() => document.body.classList.add('render'), 60);
}