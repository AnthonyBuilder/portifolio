var crdLeft = document.querySelector('#crd-left');
var crdCenter = document.querySelector('#crd-center');
var crdRight = document.querySelector('#crd-right');

var allCrds = document.querySelectorAll('.itm-crd-proj');

allCrds.addEventListener('click', () => {
    this.parentNode.classList.toggle('tgg-on');
}, true);