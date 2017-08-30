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
		    meta='President'
		    description="Martha needs some text describing her work in the community and role with FTR"
		  />

			<Card style={styles.boardCard}
				color="red"
		    image={John}
		    header='John Parrish'
		    meta='Member'
		    description="John Parrish recently retired as President of Midwest Floor Coverings Inc., the largest wholesale building products distributor in the Rocky Mountain Region.  John also just stepped down as the Board Chair of the Fourth Street Clinic.  He served on the Board in various capacities for nine years.  The Fourth Street Clinic provides free primary medical care for the homeless population of Salt Lake City."
		  />

		  <Card
		  	color="orange"
		    image={Jennifer}
		    header='Jennifer Carlson'
		    meta='Vice President'
		    description="Jennifer Carlson is Clinical Director of Turning Point Centers Mountain View Residential Treatment Program. She is a Licensed Clinical Mental Health Counselor and a nationally certified Master Addictions Counselor. Jen has worked in the field of addictions treatment and recovery since 2004."
		  />

		  <Card
		  	color="yellow"
		    image={Doug}
		    header='Doug McNeil'
		    meta='Treasurer'
		    description="Years ago, Fit To Recover's first step to becoming a nonprofit was to meet with Salt Lake City's SCORE chapter, a nonprofit organization that connects fledging businesses operations with retired business professionals who act as mentors. It was FTR’s good fortune to find Doug McNeil, who had recently retired from Interwest Business Group -- a full service tax, accounting, and business valuation firm he owned for 29 years -- sitting across the table. Doug took on FTR as a consultant that day, and stuck with us all these years. He credits Sue, his wife of 42 years; and his beloved daughters and grandchildren for giving him his 'DYNAMITE' outlook each day."
		  />

		  <Card
		  	color="green"
		    image={Steve}
		    header='Stephen Acker'
		    meta='Member'
		    description="Steve is Emeritus Professor, The Ohio State University where he taught and conducted research for 25 years on new media and learning technologies. For FTR, he serves in the capacity of directing  research and offering strategic direction for innovation."
		  />

		  <Card
		  	color="teal"
		    image={Kathleen}
		    header='Kathleen Brachter'
		    meta='Member'
		    description="Kathleen is a Licensed Massage Therapist, in private practice 23 years, and former instructor of professional development at Utah College of Massage Therapy. Her previous non-profit experience includes copy writing at Fourth Street Clinic, participant coach with University of Utah's U-Fit Program, public relations for Community Food Co-Op of Utah, and Big Sister of the Year for Big Brothers, Big Sisters of Utah."
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