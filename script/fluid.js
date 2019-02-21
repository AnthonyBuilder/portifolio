

//execute animation
class FluidAnimate {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = el;
        this.DOM.paths = Array.from(this.DOM.el.querySelectorAll('path'));
        this.animate();
    }
    animate() {
        this.DOM.paths.forEach((path) => {
            setTimeout(() => {
                anime({
                    targets: path,
                    duration: anime.random(5000, 7000),
                    easing: [0.5, 0, 0.5, 1],
                    d: path.getAttribute('pathdata:id'),
                    loop: true,
                    direction: 'alternate'
                });
            }, anime.random(0, 2000));
        });
    }
};

new FluidAnimate(document.querySelector('svg.scene'));
