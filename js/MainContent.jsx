import React from 'react';
import ReactDOM from 'react-dom';
import {ArticleOne} from './articleOne.jsx';
import {ArticleTwo} from './articleTwo.jsx';
import {ArticleThree} from './articleThree.jsx';

export class Main extends React.Component {


    render() {
        if (this.props.page !== "Main")
            return null;
        return <div>
            <div className="articleFour">
                <h1>Witamy na stronie firmy Substancja.</h1><br/>
                Połączyliśmy potencjał dwóch substancji: agencji reklamowej i drukarni. Artystyczny świat kreacji może więc korzystać z całej palety precyzyjnych technologii wyrażania myśli i koncepcji. Co to oznacza dla naszych klientów? Przede wszystkim niższe koszty produkcji reklam (typu: stojaki roll up, banery reklamowe, naklejki, plakaty itd.) oraz dużą oszczędność czasu. Łatwiej jest także wyeliminować wszelkie problemy, występujące często na linii agencja reklamowa - drukarnia.</div>
            <div className="container">

            <ArticleOne/>
            <ArticleTwo/>
            <ArticleThree/>


            </div>
            <div className="header2">
                <img src="./img/promocja.jpg"/></div>

        </div>

    }


}
