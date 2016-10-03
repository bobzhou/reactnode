import React from 'react'
import { Link } from 'react-router'

class Error404 extends React.Component {
	render() {
		return (
			<div id="not-found">
				Whoops....
				<div>
					<Link to={`/`}>Home</Link><br />
					<Link to={`/speaker`}>Speaker</Link>
				</div>
			</div>
		)
	}
}

module.exports = Error404;