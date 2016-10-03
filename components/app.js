import React from 'react'
import io from 'socket.io-client'
import Members from './Members'
import Rooms from './Rooms'

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			status: 'disconnected',
			members: [],
			rooms: []
		}

		this.componentWillMount = this.componentWillMount.bind(this);
		this.emit = this.emit.bind(this);
	}

	componentWillMount() {
		this.socket = io('http://localhost:8000');

		this.socket.on('connect', () => this.setState({'status' : 'connected'}));

		this.socket.on('disconnect', () => this.setState({'status' : 'disconnected'}));

		this.socket.on('updateState', x => this.setState(x));
	}

	emit(eventName, payload) {
        this.socket.emit(eventName, payload);
    }

	render() {
		return (
			<div className="fill">
				<Rooms emit={this.emit} {...this.state} />
				{React.cloneElement(this.props.children, {emit: this.emit, ...this.state})}
				<Members emit={this.emit} members={this.state.members}/> 
			</div>
		);
	}
}

module.exports = App;