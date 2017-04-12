import React from 'react';
import ReactDOM from 'react-dom';

export class Contact extends React.Component {

    render() {
        if (this.props.page !== "Contact")
            return null;

        return <div className="contact">
            <img src="./img/logo.png"/>
            <div>
                <img src="./img/telBig.png"/>
                <h1>tel.: 022 760 33 16<br/>
                    tel.kom.: 691 75 62 75<br/>
                  <a href="mailto:info@substancja.eu">info@substancja.eu</a>
                </h1>
                <img src="./img/mailBig.png"/>

            </div>

            <p>Brzeziny 1L, 05-074 Halinów</p>
            <p>GPS: 52°11'47''N, 21°22'27''E</p>
            <p>pn. - pt.
                <strong> 9 - 17</strong><br/>
                sob.
                <strong> 10 - 13</strong><br/>
                (w soboty prosimy o kontakt przed przyjazdem)
            </p>

            <h2>Mapka dojazdu</h2>

            <p>
                <iframe src="https://maps.google.pl/maps/ms?msid=201374912188785340362.0004b3563160c6d619aa1&amp;msa=0&amp;ie=UTF8&amp;t=m&amp;source=embed&amp;ll=52.216863,21.29425&amp;spn=0.294483,0.686646&amp;z=10&amp;output=embed"></iframe>
            </p>
        </div>

    }

}
