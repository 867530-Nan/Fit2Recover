import React, { Component } from 'react'
import {  } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import Doug from '../photodump/boardDoug.jpeg'
import Jennifer from '../photodump/boardJennifer.jpeg'
import John from '../photodump/boardJohn.jpeg'
import Kathleen from '../photodump/boardKathleen.jpeg'
import Steve from '../photodump/boardSteveHD.jpg'
import Ian from '../photodump/boardMartha.png'

import '../../styles/board.css'


//useless comment


class Board extends Component {
	render() {
		return (
<div style={styles.boardBackground} >
		<Card.Group className="boardCardGroup" stye={styles.boardCardGroup}>

		  <Card 
				color="pink"
		    image={Ian}
		    header='Martha Macomber'
		    meta='Board Chair'
		    description="As the University of Utah’s educational coordinator for the Ute Indian Tribes, Martha helps increase educational opportunities among this vulnerable population. She owns M Squared Productions, a video producer and events organizer designed to strengthen nonprofits, a passion to which she has dedicated most of her professional life."
		  />

		  <Card
		  	color="orange"
		    image={Jennifer}
		    header='Jennifer Carlson'
		    meta='Board Vice President'
		    description="Jennifer Carlson is Clinical Director of Turning Point Centers Mountain View Residential Treatment Program. She is a Licensed Clinical Mental Health Counselor and a nationally certified Master Addictions Counselor. Jen has worked in the field of addictions treatment and recovery since 2004."
		  />

			<Card 
				color="red"
		    image={John}
		    header='John Parrish'
		    meta='Board Member'
		    description="John Parrish recently retired as President of Midwest Floor Coverings Inc., the largest wholesale building products distributor in the Rocky Mountain Region.  John recently stepped down as the Board Chair of the Fourth Street Clinic after having served on the Board in various capacities for nine years.  The Fourth Street Clinic provides free primary medical care for the homeless population of Salt Lake City."
		  />

		  <Card
		  	color="yellow"
		    image={Doug}
		    header='Doug McNeil'
		    meta='Treasurer'
		    description="Doug retired from Interwest Business Group, a full service tax, accounting, and business valuation firm he owned for 29 years. He is also a volunteer for SCORE, a nonprofit association dedicated to educating entrepreneurs and helping small businesses start, grow, and succeed nationwide."
		  />

		  <Card
		  	color="green"
		    image={Steve}
		    header='Stephen Acker'
		    meta='Member'
		    description="Steve is Emeritus Professor, The Ohio State University, where he taught and conducted research for 25 years on new media and learning technologies. For FTR, he serves in the capacity of directing research and offering strategic direction for innovation."
		  />

		  <Card
		  	color="teal"
		    image={Kathleen}
		    header='Kathleen Brachter'
		    meta='Member'
		    description="Kathleen is a Licensed Massage Therapist, in private practice 23 years, and former instructor of professional development at Utah College of Massage Therapy. Her previous non-profit experience includes Fourth Street Clinic, U-Fit, Community Food Co-Op of Utah, and Big Brothers, Big Sisters."
		  />

		</Card.Group>
</div>

		)
	}
}

const styles = {
	boardBackground: {
		paddingTop: '65px',
	},
	boardCardGroup: {
		width: '100%',
		margin: '0 auto',
	}
}

export default Board;