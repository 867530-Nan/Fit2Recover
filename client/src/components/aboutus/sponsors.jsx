import React, { Component } from 'react'
import {  } from 'react-router-dom'
import '../../styles/sponsors.css'
import { Image, Grid, List } from 'semantic-ui-react'
import sponsors from '../photodump/sponserBanner.jpeg'
import huddle from '../photodump/bootcamp-end-huddle.jpeg'
import lugu from '../photodump/lugu2017.jpeg'
import silver from '../photodump/silverStar.png'


class Sponsors extends Component {

	render() {
		return (
	<div>
			<div className="topPadding" style={styles.topPadding}></div>

			<div className="sponsorsTop img-responsive" style={styles.beforeafter}>
				<h1 className="sponsorsTopHeading" style={styles.beforeAfterWords}>Sponsors and Partners</h1>
			</div>

			<Grid>
	      <Grid.Column className="tripGrid" mobile={16} tablet={4} computer={4}>
	        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" rel="noopener noreferrer">
						<input type="hidden" name="cmd" value="_s-xclick"/>
						<input type="hidden" name="hosted_button_id" value="LF6G389XTHZR6"/>
						<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
						<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
					</form>
	      </Grid.Column>
	      <Grid.Column className="tripGrid" mobile={16} tablet={8} computer={8}>
	        <div className="sponsorLevels" >
			    	Interested in becoming an FTR Sponsor?<br />We'd love to have you.<br/>Read more about Sponsorship levels
			    	<a href="https://nebula.wsimg.com/987062255bac1e683351c9b4742e2c62?AccessKeyId=6C572ACEE6337077909C&disposition=0&alloworigin=1" target="_blank" rel="noopener noreferrer">
			    	&nbsp;here.</a>
			    </div>
	      </Grid.Column>
	      <Grid.Column className="tripGrid" mobile={16} tablet={4} computer={4}>
	        <Image centered src={silver} />
	      </Grid.Column>
	    </Grid>

			<Grid className="sponsors">
				<Grid.Column className="sponsorsColumn" mobile={16} tablet={5} computer={5}>
					<Image className="leftImage" src={lugu} />
					<List>
				      <List.Header className="donorColumnHeader">Special thanks to our Champion Donors:</List.Header>
					    <List.Item as='a' className="singleDonor" href="http://www.gsecclesfoundation.org/" target="_blank" rel="noopener noreferrer">
					    	The George S. and Dolores D. Eccles Foundation</List.Item>
					    <List.Item as='a' className="singleDonor" href="http://sorensonlegacyfoundation.org/" target="_blank" rel="noopener noreferrer">
					    	The Sorenson Legacy Foundation</List.Item>
					    <List.Item as='a' className="singleDonor" href="https://addictionfree.com/" target="_blank" rel="noopener noreferrer">
					    	Cold Creek Behavioral Health</List.Item>
					    <List.Item as='a' className="singleDonor" href="http://elevatedbilling.com/" target="_blank" rel="noopener noreferrer">
					    	Elevated Billing</List.Item>
					    <List.Item as='a' className="singleDonor" href="https://www.petzl.com/fondation/fondation-petzl?language=en#.Wa-nN9N95TY" target="_blank" rel="noopener noreferrer">
					    	Petzl Foundation</List.Item>
					    <List.Item as='a' className="singleDonor" href="https://uw.org/" target="_blank" rel="noopener noreferrer">
					    	United Way of Salt Lake</List.Item>
				    	<List.Item className="singleDonor" >
				    		Nicholas Zurn Scholarship Fund</List.Item>
				  </List>
				</Grid.Column>

				<Grid.Column className="xsColumn hidden-sm hidden-md hidden-lg hidden-xl">	
					<List>
				      <List.Header className="donorColumnHeader">A BIG Thank You to our Recovery Wall partners</List.Header>
					    <List.Item as='a' className="singleDonor" href="http://www.ascendrecovery.com/" target="_blank" rel="noopener noreferrer">
					    	Ascend Recovery</List.Item>
					    <List.Item as='a' className="singleDonor" href="http://renaissanceranch.net/" target="_blank" rel="noopener noreferrer">
					    	Renaissance Ranch Outpatient</List.Item>
					    <List.Item as='a' className="singleDonor" href="http://turningpointcenters.com/" target="_blank" rel="noopener noreferrer">
					    	Turning Point</List.Item>
					    <List.Item as='a' className="singleDonor" href="http://slco.org/youth/" target="_blank" rel="noopener noreferrer">
					    	Salt Lake County Youth Services</List.Item>
					    <List.Item as='a' className="singleDonor" href="http://www.saltlakebehavioralhealth.com/military-mental-health-program/strong-hope-womens-mental-health-program" target="_blank" rel="noopener noreferrer">
					    	Strong Hope / Salt Lake Behavioral Health</List.Item>
					    <List.Item as='a' className="singleDonor" href="https://www.woundedwarriorproject.org/" target="_blank" rel="noopener noreferrer">
					    	Wounder Warrior Project</List.Item>
				  </List>
				</Grid.Column>

				<Grid.Column mobile={16} tablet={6} computer={6}>
	        <Image className="sponsorsPic" src={sponsors} />
	      </Grid.Column>

				<Grid.Column className="sponsorsColumn hidden-xs" mobile={0} tablet={5} computer={5}>	
					<Image className="rightImage" src={huddle} />
					<List>
				      <List.Header className="donorColumnHeader">A BIG Thank You to our Recovery Wall partners</List.Header>
					    <List.Item as='a' className="singleDonor" href="http://www.ascendrecovery.com/" target="_blank" rel="noopener noreferrer">
					    	Ascend Recovery</List.Item>
					    <List.Item as='a' className="singleDonor" href="http://renaissanceranch.net/" target="_blank" rel="noopener noreferrer">
					    	Renaissance Ranch Outpatient</List.Item>
					    <List.Item as='a' className="singleDonor" href="http://turningpointcenters.com/" target="_blank" rel="noopener noreferrer">
					    	Turning Point</List.Item>
					    <List.Item as='a' className="singleDonor" href="http://slco.org/youth/" target="_blank" rel="noopener noreferrer">
					    	Salt Lake County Youth Services</List.Item>
					    <List.Item as='a' className="singleDonor" href="http://www.saltlakebehavioralhealth.com/military-mental-health-program/strong-hope-womens-mental-health-program" target="_blank" rel="noopener noreferrer">
					    	Strong Hope / Salt Lake Behavioral Health</List.Item>
					    <List.Item as='a' className="singleDonor" href="https://www.woundedwarriorproject.org/" target="_blank" rel="noopener noreferrer">
					    	Wounder Warrior Project</List.Item>
				  </List>
				</Grid.Column>

			</Grid>

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