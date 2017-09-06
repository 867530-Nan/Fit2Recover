import React, { Component } from 'react'
import {  } from 'react-router-dom'
import '../../styles/sponsors.css'
import { } from 'semantic-ui-react'

class Sponsors extends Component {

	render() {
		return (
	<div>
			<div className="topPadding" style={styles.topPadding}></div>

			<div className="sponsorsTop img-responsive" style={styles.beforeafter}>
				<h1 className="sponsorsTopHeading" style={styles.beforeAfterWords}>Sponsors and Partners</h1>
				<h3 className="sponsorsTopSecond">From the entire FTR community,<br/>Thank You. </h3>
			</div>

			<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
				<input type="hidden" name="cmd" value="_s-xclick" />
				<input type="hidden" name="hosted_button_id" value="LF6G389XTHZR6" />
				<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
				<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
			</form>

				
	</div>
		)
	}
}

const styles = {
	topPadding: {
		paddingTop: '70px',
	},
	
}

export default Sponsors;