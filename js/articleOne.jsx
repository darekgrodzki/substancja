import React from 'react';
import ReactDOM from 'react-dom';

export class ArticleOne extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            arcticleOne: true
        }
    }
    art1back = () => {
        this.setState({articleOne: false})
    }
    art2back = () => {
        this.setState({articleOne: true})
    }

    render() {
        if (this.state.articleOne === true) {
            return <div className="rotate" onMouseOut={this.art1back}>
                <article className="articleOne back">
                    <img src="./img/002.png"/>
                    <h2>Druk wielkoformatowy</h2><br/>
                    <h3>Roll up'y</h3><br/>
                    <h3>Ścianki reklamowe</h3><br/>
                    <h3>Bannery reklamowe</h3><br/>
                    <h3>Plakaty</h3><br/>
                    <h3>Naklejki</h3><br/>
                    <h3>Oklejanie witryn</h3><br/>
                    <h3>Oklejanie samochodów</h3><br/>
                    <p>Dowiedz się więcej</p>
                </article>
                <article className="articleOne front">
                    <img src="./img/002.png"/>
                    <h2>Druk wielkoformatowy</h2><br/>
                    <h4>
                      Nasza drukarnia wielkoformatowa specjalizuje się w różnego rodzaju stojakach reklamowych typu roll up, ścankach POP-UP oraz innych produktach gdzie ważna jest przede wszystkim jakość druku. Oczywiście produkujemy także banery reklamowe, naklejki oraz plakaty. Drukujemy na sprzęcie marki Roland o maksymalnej rozdzielczości 1440 dpi. Zawsze korzystamy z wysokich rozdzielczości i odpowiednich profili kolorystycznych, dzięki czemu uzyskujemy fotograficzną jakość wydruków oraz eliminujemy wszelakie wady, jak choćby paskowanie itp..
                    </h4>
                </article>
            </div>;
        } else {
            return <div className="rotate" onMouseOver={this.art2back}>
                <article className="articleOne front">
                    <img src="./img/002.png"/>
                    <h2>Druk wielkoformatowy</h2><br/>
                    <h3>Roll up'y</h3><br/>
                    <h3>Ścianki reklamowe</h3><br/>
                    <h3>Bannery reklamowe</h3><br/>
                    <h3>Plakaty</h3><br/>
                    <h3>Naklejki</h3><br/>
                    <h3>Oklejanie witryn</h3><br/>
                    <h3>Oklejanie samochodów</h3><br/>
                    <p>Dowiedz się więcej</p>
                </article>
                <article className="articleOne back">
                    <img src="./img/002.png"/>
                    <h2>Druk wielkoformatowy</h2><br/>
                    <h4>
                      Nasza drukarnia wielkoformatowa specjalizuje się w różnego rodzaju stojakach reklamowych typu roll up, ścankach POP-UP oraz innych produktach gdzie ważna jest przede wszystkim jakość druku. Oczywiście produkujemy także banery reklamowe, naklejki oraz plakaty. Drukujemy na sprzęcie marki Roland o maksymalnej rozdzielczości 1440 dpi. Zawsze korzystamy z wysokich rozdzielczości i odpowiednich profili kolorystycznych, dzięki czemu uzyskujemy fotograficzną jakość wydruków oraz eliminujemy wszelakie wady, jak choćby paskowanie itp..
                    </h4>
                </article>
            </div>;
        }
    }

}
