import React from 'react';
import ReactDOM from 'react-dom';

export class Footer extends React.Component {

    render() {

        return <footer>
            <section>
                <div>
                    <a href="https://www.facebook.com/Substancja-317585418285897/" target="_blank">
                        <img src="./img/fb.png"/>
                        <p>Nasz Facebook</p>
                    </a>
                </div>
                <div>
                    <a href="mailto:info@substancja.eu">
                        <img src="./img/mail.png"/>
                        <p>info@substancja.eu</p>
                    </a>
                </div>
                <div>
                    <a href="tel:+48691756275">
                        <img src="./img/tel.png"/>
                        <p>691 75 62 75</p>
                    </a>
                </div>

                <div>
                    <a href="https://www.substancja.eu/" target="_self">
                        <h2>&copy;</h2>
                        <img src="./img/logo.png"/>
                    </a>
                </div>
            </section>
        </footer>;

    }

}
