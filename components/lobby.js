import React from 'react'

class Lobby extends React.Component {
	constructor(props) {
		super(props);
		this.newRoom = this.newRoom.bind(this);
	}

	newRoom() {
		var roomName = this._roomName.value;
		this.props.emit('createRoom', {name: roomName});
	}

	render() {
		return (
			<div id="lobby" action="javascript:void(0)" onSubmit={this.newRoom} className="pull-left">
				<form>
				  <div className="form-group">
				    <label htmlFor="roomName">Start New Room</label>
				    <input 
				    	type="text" 
				    	className="form-control" 
				    	id="roomName" 
				    	placeholder="Room Name" 
				    	ref={(c) => this._roomName = c} 
				    	required
				    />
				    <button type="submit" className="btn btn-primary">Submit</button>
				  </div>
				</form>
			</div>
		)	
	}
}

module.exports = Lobby;