import React from 'react';
import ReactDOM from 'react-dom';

import {Page} from './Header.jsx';
require('../scss/main.scss');

document.addEventListener("DOMContentLoaded", function() {

    ReactDOM.render(

        <Page/>, document.getElementById('app'));

    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'pl',
            autoDisplay: false
        }, 'google_translate_element');
    } < script type = "text/javascript" src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" > </script>

});
