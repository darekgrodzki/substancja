import React from 'react';
import ReactDOM from 'react-dom';
import {PortfolioElement} from './portfolioElement.jsx';
import {PortfolioElementHorizontal} from './portfolioElementHorizontal.jsx';

export class Portfolio extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            vertical: [
                <img src="./img/portfolio/1.jpg" alt="Roll up NBP"/>,
                <img src="./img/portfolio/2.jpg" alt="Roll up Polsat JimJam"/>,
                <img src="./img/portfolio/3.jpg" alt="Roll up Manpower"/>,
                <img src="./img/portfolio/4.jpg" alt="Roll up Liz"/>,
                <img src="./img/portfolio/5.jpg" alt="Roll up Sharp"/>,
                <img src="./img/portfolio/6.jpg" alt="Roll up DŻP"/>,
                <img src="./img/portfolio/7.jpg" alt="Roll up Ambasada Holandii"/>,
                <img src="./img/portfolio/8.jpg" alt="Roll up King Cross Praga"/>,
                <img src="./img/portfolio/9.jpg" alt="Roll up D'Vision"/>,
                <img src="./img/portfolio/10.jpg" alt="POP UP Manpower"/>,
                <img src="./img/portfolio/11.jpg" alt="POP UP BPS"/>,
                <img src="./img/portfolio/12.jpg" alt="POP UP Travelport"/>
            ],
            horizontal: [
                <img src="./img/portfolio/13.jpg" alt="Roll up'y Uniwersytet Trzeciego Wieku"/>,
                <img src="./img/portfolio/14.jpg" alt="Roll up'y Centrum Nauki Kopernik"/>,
                <img src="./img/portfolio/15.jpg" alt="Roll up'y DŻP"/>,
                <img src="./img/portfolio/16.jpg" alt="Oklejenie witryn KCP"/>,
                <img src="./img/portfolio/17.jpg" alt="Oklejenie witryn House"/>,
                <img src="./img/portfolio/18.jpg" alt="Plansze Inpost"/>,
                <img src="./img/portfolio/19.jpg" alt="Oklejenie Bosch"/>,
                <img src="./img/portfolio/20.jpg" alt="Oklejenie witryn SGB"/>,
                <img src="./img/portfolio/21.jpg" alt="Oklejenie witryn KCP"/>,
                <img src="./img/portfolio/22.jpg" alt="Oklejenie samochodu Techmedia"/>,
                <img src="./img/portfolio/23.jpg" alt="Oklejenie samochodu Kowalczyk MB"/>,
                <img src="./img/portfolio/24.jpg" alt="Oklejenie samochodu Substancja"/>
            ]
        };
    }


    render() {
      if(this.props.page !== "Portfolio")
      return null;

        let vertical = this.state.vertical.map((element, index) => {

            return <PortfolioElement
              key={index} myKey={this.state.vertical[index]}/>

        });
        let horizontal = this.state.horizontal.map((element, index) => {

            return <PortfolioElementHorizontal
              key={index} myKey={this.state.horizontal[index]}/>

        });

        return <div className="portfolio">
          <h2>Zapraszamy do obejrzenia galerii naszych prac.</h2>

                      {vertical}
                      {horizontal}

        </div>
    }
}
