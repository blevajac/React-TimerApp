//kada se koristi Webpack svaki file se ponaša indipendno te ga je potrebno importirati explicitno
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//componente
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');


$(document).foundation();

//App css
require('style!css!sass!aplicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="countdown" component={Countdown} />
            <IndexRoute component={Timer} />
        </Route>
    </Router>,
    document.getElementById('app')
);
