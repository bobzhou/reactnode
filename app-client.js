import React from 'react'
import ReactDOM from 'react-dom'
import ReactRouter from 'react-router'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// import all the components 
var App = require('./components/App');
var Error404 = require('./components/Error404');
// var Audience = require('./components/Audience');
// var Speaker = require('./components/Speaker');
// var Board = require('./components/Board');

var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={App}></IndexRoute>
		<Route path="*" component={Error404}></Route>
	</Route>
);

ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('react-container'));