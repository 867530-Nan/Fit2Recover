import React, { Component } from 'react'
import {  } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import Ian from '../photodump/staffIan.jpg'
import Georgia from '../photodump/staffGeorgia.jpg'
import Rachel from '../photodump/staffRachel.png'
import Sarah from '../photodump/staffSarah.jpg'
import Tessa from '../photodump/staffTessa.jpg'
import Frank from '../photodump/staffFrankFamily.jpg'
import Parker from '../photodump/staffParker.jpg'
import Lacey from '../photodump/staffLacey.jpg'
import Courtney from '../photodump/staffCourtney.png'


import '../../styles/currentstaff.css'


//useless comment


class CurrentStaff extends Component {
	render() {
		return (
<div style={styles.boardBackground} >
		<Card.Group className="boardCardGroup" stye={styles.boardCardGroup}>

		  <Card 
		  	className="staffBoardCard"
				color="pink"
		    image={Ian}
		    header='Ian Acker'
		    meta='Founder'
		    description="As the University of Utah’s educational coordinator for the Ute Indian Tribes, Martha helps increase educational opportunities among this vulnerable population. She owns M Squared Productions, a video producer and events organizer designed to strengthen nonprofits, a passion to which she has dedicated most of her professional life."
		  />

		  <Card
		  	className="staffBoardCard"
		  	color="orange"
		    image={Georgia}
		    header='Georgia Gregersen'
		    meta='Director of Operations'
		    description="Jennifer Carlson is Clinical Director of Turning Point Centers Mountain View Residential Treatment Program. She is a Licensed Clinical Mental Health Counselor and a nationally certified Master Addictions Counselor. Jen has worked in the field of addictions treatment and recovery since 2004."
		  />

			<Card 
				className="staffBoardCard"
				color="red"
		    image={Rachel}
		    header='Rachel Santizo'
		    meta='Community Service Director'
		    description="John Parrish recently retired as President of Midwest Floor Coverings Inc., the largest wholesale building products distributor in the Rocky Mountain Region.  John recently stepped down as the Board Chair of the Fourth Street Clinic after having served on the Board in various capacities for nine years.  The Fourth Street Clinic provides free primary medical care for the homeless population of Salt Lake City."
		  />

		  <Card
		  	className="staffBoardCard"
		  	color="yellow"
		    image={Sarah}
		    header='Sarah Kappos'
		    meta='Creative Arts Director'
		    description="Doug retired from Interwest Business Group, a full service tax, accounting, and business valuation firm he owned for 29 years. He is also a volunteer for SCORE, a nonprofit association dedicated to educating entrepreneurs and helping small businesses start, grow, and succeed nationwide."
		  />

		  <Card
		  	className="staffBoardCard"
		  	color="green"
		    image={Tessa}
		    header='Tessa Acker'
		    meta='Dietitian, Food to Recover'
		    description="Steve is Emeritus Professor, The Ohio State University, where he taught and conducted research for 25 years on new media and learning technologies. For FTR, he serves in the capacity of directing research and offering strategic direction for innovation."
		  />

		  <Card
		  	className="staffBoardCard"
		  	color="teal"
		    image={Frank}
		    header='Frank Young'
		    meta='Fitness Director'
		    description="Kathleen is a Licensed Massage Therapist, in private practice 23 years, and former instructor of professional development at Utah College of Massage Therapy. Her previous non-profit experience includes Fourth Street Clinic, U-Fit, Community Food Co-Op of Utah, and Big Brothers, Big Sisters."
		  />

		  <Card
		  	className="staffBoardCard"
		  	color="teal"
		    image={Courtney}
		    header='Courtney Strong'
		    meta='Yoga Instructor'
		    description="Kathleen is a Licensed Massage Therapist, in private practice 23 years, and former instructor of professional development at Utah College of Massage Therapy. Her previous non-profit experience includes Fourth Street Clinic, U-Fit, Community Food Co-Op of Utah, and Big Brothers, Big Sisters."
		  />

		  <Card
		  	className="staffBoardCard"
		  	color="teal"
		    image={Parker}
		    header='Parker Jones'
		    meta='Fitness Instructor'
		    description="Kathleen is a Licensed Massage Therapist, in private practice 23 years, and former instructor of professional development at Utah College of Massage Therapy. Her previous non-profit experience includes Fourth Street Clinic, U-Fit, Community Food Co-Op of Utah, and Big Brothers, Big Sisters."
		  />

		  <Card
		  	className="staffBoardCard"
		  	color="teal"
		    image={Lacey}
		    header='Lacey Garcia'
		    meta="Woman's Group Leader"
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

export default CurrentStaff;