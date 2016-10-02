var React = require('react');
var io = require('socket.io-client');
//var Header = require('./parts/Header');

var App = React.createClass({

	getInitialState() {
		return {
			status: 'disconnected',
			title: '',
			member: {},
			audience: []
		}
	},

	componentWillMount() {
		this.socket = io('http://localhost:8000');
	},

	render() {
		return (
			<div>
			</div>
		);
	}
});

module.exports = App;