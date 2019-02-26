
//deixa o Body visivel executando a animacao de fade quando o timer termina
setTimeout(() => document.body.classList.add('render'), 60);

//executa a animação chamando as funcoes da classe anime.min.js
class FluidAnimate {
    //construtor
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

//cria e verifica se o navegador suporta as variaveis do CSS
document.documentElement.className = "js";
function supportsCssVars() {
    var e, t = document.createElement("style");
    return t.innerHTML = "root: { --tmp-var: bold; }",
        document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")),
        t.parentNode.removeChild(t), e
};

supportsCssVars() || alert("Esta versão do navegador não suporta as animações do CSS. Por favor, use um navegador moderno");
