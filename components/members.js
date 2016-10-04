import React from 'react'
import Display from './parts/Display'

class Members extends React.Component {
	constructor(props) {
		super(props);
	}

	renderMember(member) {
		return (
			<div>
				{member}
			</div>
		);
	}

	render() {
		return (
			<div id="members-list" className="pull-right fill">
				<Display if={this.props.members.length < 1}>
					There are no one in this room
				</Display>
				<Display if={this.props.members.length > 0}>
					{this.props.members.map(this.renderMember)}
				</Display>
			</div>
	 	);
	}
}

module.exports = Members;