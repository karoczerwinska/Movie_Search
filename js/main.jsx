import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/main.scss';

import App from './components/App/App.jsx';


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
