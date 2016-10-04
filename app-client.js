import React from 'react'
import ReactDOM from 'react-dom'
import ReactRouter from 'react-router'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// import all the components 
import App from './components/App'
import Error404 from './components/Error404'
import Lobby from './components/Lobby'
import Room from './components/Room'
// var Speaker = require('./components/Speaker');
// var Board = require('./components/Board');

var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Lobby} />
		<Route path="/r/:roomId" component={Room}/>
		<Route path="*" component={Error404}/ >
	</Route>
);

ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('react-container'));