import React from 'react';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazy-load';
import {ArticleOne} from './articleOne.jsx';
import {ArticleTwo} from './articleTwo.jsx';
import {ArticleThree} from './articleThree.jsx';

export class Main extends React.Component {

    render() {

        if (this.props.page !== "Home")
            return null;

        return <div>
            <div className="articleFour">
                <h1>Witamy na stronie firmy Substancja.</h1><br/>
                Połączyliśmy potencjał dwóch substancji: agencji reklamowej i drukarni. Artystyczny świat kreacji może więc korzystać z całej palety precyzyjnych technologii wyrażania myśli i koncepcji. Co to oznacza dla naszych klientów? Przede wszystkim niższe koszty produkcji reklam (typu: stojaki roll up, banery reklamowe, naklejki, plakaty itd.) oraz dużą oszczędność czasu. Łatwiej jest także wyeliminować wszelkie problemy, występujące często na linii agencja reklamowa - drukarnia.
            </div>

            <div className="container">
                <ArticleOne/>
                <ArticleTwo/>
                <ArticleThree/>
            </div>
            <div className="more">
                <h2>Poniżej przedstawiamy kilka ciekawych wydarzeń z życia naszej firmy</h2>
                <h2>15.03.2016</h2>
                <p>A oto filmik z oklejonego przez nas ośrodka szoleniowego Akademi Altkom.<br/>
                    Udekorowaliśmy go m.in. w wiele ciekawych grafik ściennych, wyciętych z kolorowej
                    <br/>
                    folii oraz obrazów nadrukowanych na płytach PVC.<br/>
                    A oto efekt :)

                </p><br/>

                <div className="iframe">
                    <LazyLoad>
                        <iframe src="https://www.youtube.com/embed/uoP-ro_PReY" frameBorder="0" allowFullScreen></iframe>
                    </LazyLoad>
                </div>
                <h2>21.01.2015</h2>
                <h2>Zmieniamy nasze logo :)</h2>
                <p>W zwiąku z tym, że pragniemy ciągle się rozwijać i udoskonalać działalność naszej firmy, postanowiliśmy trochę odświeżyć nasz logotyp. Teraz będzie bardziej kolorowy i mamy nadzieję, że będzie się Wam bardziej podobał.
                    <br/>
                    A oto nasze nowe logo:</p>
                <p><img src="img/logo.png" alt="logo Substancja"/><br/>
                    <br/>
                </p>
                <h2>29.11.2013</h2>

                <h2>Substancja na czarnym lądzie!</h2>

                <p>
                    Naszym ostatnim osiągnięciem jest nawiązanie współpracy z
                    <strong> Fundacją Kasisi </strong>
                    założoną przez Szymona Hołownię. Jest to Fundacja, która pomaga opiekować się domem dziecka w Zambii.<br/>
                    <br/>
                    Jednym z ich ostatnich projektów jest
                    <strong> zakup ambulansu </strong>
                    dla sierocińca. Dzięki niemu chore dzieci mogą szybko dotrzeć do szpitala po wyboistych zambijskich drogach.<br/>
                    <br/>
                    My dołożyliśmy swoją cegiełkę do tego szlachetnego przedsięwzięcia. Zaprojektowaliśmy i wydrukowaliśmy
                    <strong> naklejki na ambulans</strong>, dzięki czemu jest on dobrze oznakowany i widoczny. Teraz nawet lwy przed nim uciekają :)<br/>
                    <br/>
                    Staramy się też pomagać przy realizacji kolejnych projektów, do czego i Was zachęcamy!
                    <br/>
                    Więcej szczegółów na stronie
                    <a href="http://www.fundacjakasisi.pl/" rel="nofollow" target="_blank">www.fundacjakasisi.pl</a>
                </p><br/><br/>
                <div className="iframe">
                    <LazyLoad>
                        <iframe src="https://www.youtube.com/embed/_avrHRefwi4" frameBorder="0" allowFullScreen></iframe>
                    </LazyLoad>
                </div>
            </div>
        </div>

    }

}
