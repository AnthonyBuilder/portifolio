class bottomNav {
    constructor(el) {
        this.el = document.querySelector('.' + el);
        this.showNavIn(el);
    }
    showNavIn(element) {
        element.style.animation = ctnBott.animIn;
    }
}