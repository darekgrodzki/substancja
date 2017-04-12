import React from 'react';
import ReactDOM from 'react-dom';

export class ArticleThree extends React.Component {

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
                    <img src="./img/003.png"/>
                    <h2>Studio reklamy</h2><br/>
                    <h3>Projekty graficzne</h3><br/>
                    <h3>Strony www</h3><br/>
                    <h3>Logotypy</h3><br/>
                    <h3>Kampanie reklamowe</h3><br/>
                    <h3>Kalendarze</h3><br/>
                    <h3>Teczki</h3><br/>
                    <h3>Papier firmowy</h3><br/>
                    <p>Dowiedz się więcej</p>
                </article>
                <article className="articleOne front">
                    <img src="./img/003.png"/>
                    <h2>Studio reklamy</h2><br/>
                    <h4>
                      Do wszystkich naszych produktów oferujemy możliwość stworzenia indywidualnego projektu. Więcej szczegółów w zakładce Projekty. Działamy także jak klasyczna agencja reklamowa więc nie ograniczamy się tylko do produktów które sami bezpośrednio produkujemy. Możesz nam zlecić stworzenie i przeprowadzenie całej kampanii reklamowej lub po prostu oszczędzić czas i zamówić cały wachlarz produktów związanych z reklamą w jednym miejscu a nie zlecać je w wielu różnych firmach.
                    </h4>
                </article>
            </div>
        } else {
            return <div className="rotate" onMouseOver={this.art2back}>
                <article className="articleOne front">
                    <img src="./img/003.png"/>
                    <h2>Studio reklamy</h2><br/>
                    <h3>Projekty graficzne</h3><br/>
                    <h3>Strony www</h3><br/>
                    <h3>Logotypy</h3><br/>
                    <h3>Kampanie reklamowe</h3><br/>
                    <h3>Kalendarze</h3><br/>
                    <h3>Teczki</h3><br/>
                    <h3>Papier firmowy</h3><br/>
                    <p>Dowiedz się więcej</p>
                </article>
                <article className="articleOne back">
                    <img src="./img/003.png"/>
                    <h2>Studio reklamy</h2><br/>
                    <h4>
                      Do wszystkich naszych produktów oferujemy możliwość stworzenia indywidualnego projektu. Więcej szczegółów w zakładce Projekty. Działamy także jak klasyczna agencja reklamowa więc nie ograniczamy się tylko do produktów które sami bezpośrednio produkujemy. Możesz nam zlecić stworzenie i przeprowadzenie całej kampanii reklamowej lub po prostu oszczędzić czas i zamówić cały wachlarz produktów związanych z reklamą w jednym miejscu a nie zlecać je w wielu różnych firmach.
                    </h4>
                </article>
            </div>
        }
    }

}
