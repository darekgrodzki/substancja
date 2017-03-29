import React from 'react';
import ReactDOM from 'react-dom';
import {HeaderElement} from './HeadingComponent.jsx';
import {Main} from './MainContent.jsx';
import {Offer} from './Offer.jsx';
import {Orders} from './Orders.jsx';
import {Portfolio} from './Portfolio.jsx';
import {More} from './More.jsx';
import {Contact} from './Contact.jsx';
import {Footer} from './footer.jsx';

export class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: "Main",
            buttonsText: [
                [
                    "Home", "Main"
                ],
                [
                    "Oferta", "Offer"
                ],
                [
                    "Portfolio", "Portfolio"
                ],
                [
                    "Zamówienia", "Orders"
                ],
                [
                    "Substancja+", "More"
                ],
                ["Kontakt", "Contact"]
            ]
        };
    }

    handleStartClick = (attr1) => {

        this.setState({page: attr1})

    }

    render() {

        let menu = this.state.buttonsText.map((element, index) => {

            return <HeaderElement
              key={index} myKey={this.state.buttonsText[index][1]} index={this.state.buttonsText[index][0]} page={this.state.page} handleStartClick={this.handleStartClick}/>

        });

        return <div>
            <header style={{
                backgroundImage: "url('./img/background1.jpg')"
            }}>
                <div className="header">

                    <nav>
                        <img src="./img/logo.png"/>

                        <ul>{menu}</ul>
                    </nav>
                </div>
                <div className="four">
                    <p>Połączyliśmy potencjał dwóch substancji: agencji reklamowej i drukarni. Artystyczny świat kreacji może więc korzystać z całej palety precyzyjnych technologii wyrażania myśli i koncepcji. Co to oznacza dla naszych klientów? Przede wszystkim niższe koszty produkcji reklam (typu: stojaki roll up, banery reklamowe, naklejki, plakaty itd.) oraz dużą oszczędność czasu. Łatwiej jest także wyeliminować wszelkie problemy, występujące często na linii agencja reklamowa - drukarnia.</p>
                </div>
            </header>
            <div className="three"></div>
            <Main page={this.state.page}/>
            <Offer page={this.state.page}/>
            <Portfolio page={this.state.page}/>
            <Orders page={this.state.page}/>
            <More page={this.state.page}/>
            <Contact page={this.state.page}/>
            <Footer/>

        </div>
    }
}
