import React from 'react';
import ReactDOM from 'react-dom';

import {Page} from './Page.jsx';
require('../scss/main.scss');


document.addEventListener("DOMContentLoaded", function() {


    ReactDOM.render(

        <Page/>, document.getElementById('app'));



});
