import React from 'react'
import Link from 'react-router'

var Error404 = React.createClass({
	render() {
		return (
			<div id="not-found">
				Whoops....
				<div>
					<Link to={`/`}>Home</Link>
					<Link to={`/speaker`}>Speaker</Link>
				</div>
			</div>
		)
	}
});

module.exports = Error404;