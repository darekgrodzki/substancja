import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from './Header.jsx';
require('../scss/main.scss');

document.addEventListener("DOMContentLoaded", function() {



    ReactDOM.render(

        <div>


          <Header/>


    </div>, document.getElementById('app'));




});
