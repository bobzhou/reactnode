import React from 'react'
import Members from './Members'

class Room extends React.Component {
	constructor(props) {
		super(props);
		this.props.emit('joinRoom', {roomId: this.props.params.roomId});
	}

	render() {
		return (
			<div>
				Hello you are in a room
				<Members emit={this.props.emit} members={this.props.room.members}/> 
			</div>
		);
	}
}

module.exports = Room;