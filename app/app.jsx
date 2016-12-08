//kada se koristi Webpack svaki file se ponaša indipendno te ga je potrebno importirati explicitno
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//componente
var Main = require('Main');


//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App css
require('style!css!sass!aplicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            
        </Route>
    </Router>,
    document.getElementById('app')
);
