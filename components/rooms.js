import React from 'react'
import Display from './parts/Display'
import { Link } from 'react-router'

class Rooms extends React.Component {
	constructor(props) {
		super(props);
		this.renderRoom = this.renderRoom.bind(this);
	}

	renderRoom(room) {
		return (
			<li key={room.id}>
				<Link to={`/r/${room.id}`}>{room.name}</Link>
			</li>
		);
	}

	render() {
		return (
			<div id="rooms-list" className="pull-left fill">
				<Display if={this.props.rooms.length < 1}>
					There are no rooms go create one!
				</Display>
				<Display if={this.props.rooms.length > 0}>
					<ul>
						{this.props.rooms.map(this.renderRoom)}
					</ul>
				</Display>
			</div>
	 	);
	}
}

module.exports = Rooms;