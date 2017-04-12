import React from 'react';
import ReactDOM from 'react-dom';

import {Page} from './Header.jsx';
require('../scss/main.scss');


document.addEventListener("DOMContentLoaded", function() {

  
    ReactDOM.render(

        <Page/>, document.getElementById('app'));



});
