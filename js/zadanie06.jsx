import React from 'react';
import ReactDOM from 'react-dom';
require('../main.scss');

document.addEventListener("DOMContentLoaded", function() {

    function animate(elem, style, unit, from, to, time, prop) {
        if (!elem) {
            return;
        }
        var start = new Date().getTime(),
            timer = setInterval(function() {
                var step = Math.min(1, (new Date().getTime() - start) / time);
                if (prop) {
                    elem[style] = (from + step * (to - from)) + unit;
                } else {
                    elem.style[style] = (from + step * (to - from)) + unit;
                }
                if (step === 1) {
                    clearInterval(timer);
                }
            }, 25);
        if (prop) {
            elem[style] = from + unit;
        } else {
            elem.style[style] = from + unit;
        }
    }

    let butt = document.querySelector('.butt');

    butt.addEventListener('click', function(event) {

        event.preventDefault();
        let cos = document.querySelector('.some1');
        animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, cos.offsetTop, 2000, true);
    });

    ReactDOM.render(
        <div className="container">
        <div id="slider">
            <figure>
                <img src="./img/slajd1-min.png"/>
                <img src="./img/slajd2-min.png"/>
                <img src="./img/slajd3-min.png"/>
                <img src="./img/slajd4-min.png"/>
            </figure>
        </div>
        <div className="navi">
            <ul>
                <li>HOME</li>
                <li>OFERTA</li>
                <li>PROMOCJE</li>
                <li>PORTFOLIO</li>
                <li>ZAMÓWIENIA</li>
                <li>SUBSTANCJA +</li>
                <li>KONTAKT</li>
            </ul>
        </div>
        <div className="content">
            <div className="one">
                <p>Witamy na stronie firmy Substancja.</p>
                <p>Połączyliśmy potencjał dwóch substancji: agencji reklamowej i drukarni. Artystyczny świat kreacji może więc korzystać z całej palety precyzyjnych technologii wyrażania myśli i koncepcji. Co to oznacza dla naszych klientów? Przede wszystkim niższe koszty produkcji reklam (typu: stojaki roll up, banery reklamowe, naklejki, plakaty itd.) oraz dużą oszczędność czasu. Łatwiej jest także wyeliminować wszelkie problemy, występujące często na linii agencja reklamowa - drukarnia. Naszym głównym obszarem działania jest Warszawa i jej okolice ale współpracujemy także z wieloma firmami z całej Polski oraz z zagranicy. "Substancja" to:</p>
            </div>
            <div className="two">
                <p>Druk wielkoformatowy</p>

                <p>Nasza drukarnia wielkoformatowa specjalizuje się w różnego rodzaju stojakach reklamowych typu roll up, ścankach POP-UP oraz innych produktach gdzie ważna jest przede wszystkim jakość druku. Oczywiście produkujemy także banery reklamowe, naklejki oraz plakaty. Drukujemy na sprzęcie marki Roland o maksymalnej rozdzielczości 1440 dpi. Zawsze korzystamy z wysokich rozdzielczości i odpowiednich profili kolorystycznych, dzięki czemu uzyskujemy fotograficzną jakość wydruków oraz eliminujemy wszelakie wady, jak choćby paskowanie itp..
                </p>
            </div>
            <div className="three"></div>
            <div className="four"></div>

        </div>
    </div>, document.getElementById('app'));

    let bb = document.querySelector('.butt');
    let active = document.querySelector('.first');
    let defaul = document.querySelector('.second');

    bb.addEventListener('click', function(event) {
        event.preventDefault();

        active.classList.toggle('active-state1');
        active.classList.toggle('default-state1');
        defaul.classList.toggle('active-state');
        defaul.classList.toggle('default-state');
    })

});
