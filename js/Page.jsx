import React from 'react';
import ReactDOM from 'react-dom';
import {HeaderElement} from './HeadingComponent.jsx';
import {Main} from './MainContent.jsx';
import {Offer} from './Offer.jsx';
import {Portfolio} from './Portfolio.jsx';
import {Contact} from './Contact.jsx';
import {Footer} from './footer.jsx';

export class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: "Home",
            buttonsText: [
                "Home", "Oferta", "Portfolio", "Kontakt"
            ],
            hamburgerClass: false
        };
    }

    changeClass = (a) => {

        this.setState({hamburgerClass: a})
    }

    handleClick = (event) => {

        this.setState({page: event})
    }

    render() {

        let menu = this.state.buttonsText.map((element, index) => {

            return <HeaderElement key={index} myKey={this.state.buttonsText[index]} page={this.state.page} handleStartClick={this.handleClick}/>

        });
        
        let menuHamburger;

        if(this.state.hamburgerClass === true) {
            menuHamburger = this.state.buttonsText.map((element, index) => {

                return <div key={this.state.buttonsText[index]} onClick={e => this.handleClick(element)}>{element}</div>
            });
        } else {
            menuHamburger === null;
        }

        let hamburger;
        if (this.state.hamburgerClass === false) {
            hamburger = <div id="menu-toggle" onClick={e => this.changeClass(true)}>
                <div id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div id="cross">
                    <span></span>
                    <span></span>
                </div>
            </div>
        } else {
            hamburger = <div id="menu-toggle" className="open" onClick={e => this.changeClass(false)}>
                <div id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div id="cross">
                    <span></span>
                    <span></span>
                </div>
            </div>

        }

        return <div>
            <header style={{
                backgroundImage: "url('./img/background1.jpg')"
            }}>
                <div className="header">

                    <nav>
                        <img src="./img/logo.png"/>

                        <ul>{menu}</ul>
                        {hamburger}
                        <div className="hamburgerNavi">
                            {menuHamburger}
                        </div>
                    </nav>
                </div>
                <div className="conceptDiv">
                    <p>Połączyliśmy potencjał dwóch substancji: agencji reklamowej i drukarni. Artystyczny świat kreacji może więc korzystać z całej palety precyzyjnych technologii wyrażania myśli i koncepcji. Co to oznacza dla naszych klientów? Przede wszystkim niższe koszty produkcji reklam (typu: stojaki roll up, banery reklamowe, naklejki, plakaty itd.) oraz dużą oszczędność czasu. Łatwiej jest także wyeliminować wszelkie problemy, występujące często na linii agencja reklamowa - drukarnia.</p>
                </div>
            </header>
            <div className="three"></div>
            <Main page={this.state.page}/>
            <Offer page={this.state.page}/>
            <Portfolio page={this.state.page}/>
            <Contact page={this.state.page}/>
            <Footer/>

        </div>

    }
}
