import React from 'react';
import ReactDOM from 'react-dom';
import {PortfolioElement} from './portfolioElement.jsx';

export class Portfolio extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonsText: [
                <img src="./img/portfolio/2.jpg"/>,
                <img src="./img/portfolio/2.jpg"/>,
                <img src="./img/portfolio/2.jpg"/>,
                <img src="./img/portfolio/2.jpg"/>,
                <img src="./img/portfolio/2.jpg"/>,
                <img src="./img/portfolio/2.jpg"/>
            ]
        };
    }


    render() {
      if(this.props.page !== "Portfolio")
      return null;

        let menu = this.state.buttonsText.map((element, index) => {

            return <PortfolioElement
              key={index} myKey={this.state.buttonsText[index]}/>

        });

        return <div className="portfolio">
                      {menu}
        </div>
    }
}
