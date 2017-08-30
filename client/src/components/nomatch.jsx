import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NoMatch extends Component {
	render() {
			return(
		<div>No Page Found, Go Back 
		<Link to='/'> Home </Link>
		</div>
	)
	}
}

export default NoMatch;