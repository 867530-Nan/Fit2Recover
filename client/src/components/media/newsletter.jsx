import React, { Component } from 'react'
import { } from 'react-router-dom'
import '../../styles/newsletter.css'
import { Grid } from 'semantic-ui-react'
import August2017 from '../photodump/August2017.png'
import July2017 from '../photodump/July2017.png'
import June2017 from '../photodump/June2017.png'
import May2017 from '../photodump/May 2017.png'
import April2017 from '../photodump/april2017.png'
import March2017 from '../photodump/march2017.png'
import February2017 from '../photodump/february2017.png'
import January2017 from '../photodump/january2017.png'
import December2016 from '../photodump/december2016.png'
import November2016 from '../photodump/november2016.png'
import October2016 from '../photodump/october2016.png'
import September2016 from '../photodump/september2016.png'
import August2016 from '../photodump/august2016.png'
import July2016 from '../photodump/july2016.png'
import June2016 from '../photodump/june2016.png'
import May2016 from '../photodump/may2016.png'
import April2016 from '../photodump/april2016.png'
import March2016 from '../photodump/march2016.png'
import February2016 from '../photodump/february2016.png'
import January2016 from '../photodump/january2016.png'
import December2015 from '../photodump/december2015.png'
import November2015 from '../photodump/november2015.png'
import October2015 from '../photodump/october2015.png'
import September2015 from '../photodump/september2015.png'
import August2015 from '../photodump/august2015.png'

class Newsletter extends Component {
	render() {
		return (
<div>
			<div className="topPaddingNewsletter" style={styles.topPaddingNewsletter}></div>
				<div className="newsletterHeader" style={styles.newsletterHeader}>
					<span className="glyphicon glyphicon-envelope" style={styles.glyphiconEnvelope}></span>
						<h1 className="newsletterHeaderWords" style={styles.newsletterHeaderWords}>&nbsp;Newsletter Archive&nbsp;</h1>
					<span className="glyphicon glyphicon-envelope" style={styles.glyphiconEnvelope}></span>
				</div>
				<div className="aboutNewsletter" style={styles.aboutNewsletter}>
					<h2 className="aboutNewsletterWords">Keeping the Community Informed of FTR's 4 Pillars</h2>
				</div>
				
				<div className="year2017" style={styles.year2017}>
					<h3 style={styles.year2017Words}>2017 Newsletters</h3>
				</div>

			<Grid centered>
				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://myemail.constantcontact.com/Mental-Health-Awareness-Month--Local-Murals--Workshops-Galore--Sanctuary-Space.html?soid=1121877896018&aid=_bPxM3gUhko">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;August 2017&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
								<img className="img-responsive" src={August2017} alt="May 2017 Newsletter" />
						</div>
					</a>
	      </Grid.Column>
				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://myemail.constantcontact.com/Mental-Health-Awareness-Month--Local-Murals--Workshops-Galore--Sanctuary-Space.html?soid=1121877896018&aid=_bPxM3gUhko">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;July 2017&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
								<img className="img-responsive" src={July2017} alt="May 2017 Newsletter" />
						</div>
					</a>
	      </Grid.Column>
				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://myemail.constantcontact.com/Mental-Health-Awareness-Month--Local-Murals--Workshops-Galore--Sanctuary-Space.html?soid=1121877896018&aid=_bPxM3gUhko">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;June 2017&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
								<img className="img-responsive" src={June2017} alt="May 2017 Newsletter" />
						</div>
					</a>
	      </Grid.Column>
	      <Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://myemail.constantcontact.com/Mental-Health-Awareness-Month--Local-Murals--Workshops-Galore--Sanctuary-Space.html?soid=1121877896018&aid=_bPxM3gUhko">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;May 2017&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
								<img className="img-responsive" src={May2017} alt="May 2017 Newsletter" />
						</div>
					</a>
	      </Grid.Column>
	      <Grid.Column mobile={16} tablet={8} computer={4}>
	      	<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/2or8Yu6">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;April 2017&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
								<img className="img-responsive" src={April2017} alt="April 2017 Newsletter" />
						</div>
					</a>
				</Grid.Column>
	      <Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/2mfAtUa">
						<div className="monthlyNewsletter">
							<div className="eachOne">
								<span className="glyphicon glyphicon-arrow-down"></span>
								<p className="month">&nbsp;March 2017&nbsp;</p>
								<span className="glyphicon glyphicon-arrow-down"></span>
							</div>
								<img className="img-responsive"  src={March2017} alt="March 2017 Newsletter" />
						</div>
					</a>
				</Grid.Column>

				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/2kiT9TK">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;February 2017&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
									<img className="img-responsive"  src={February2017} alt="February 2017 Newsletter" />
						</div>
					</a>
				</Grid.Column>

				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/2iZN4ZA">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;January 2017&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
									<img className="img-responsive"  src={January2017} alt="January 2017 Newsletter" />
						</div>
					</a>
				</Grid.Column>
	    </Grid>

	    <div className="year2017">
				<h3>2016 Newsletters</h3>
			</div>

	    <Grid centered>
	    	<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/2hZW8fq">
						<div className="monthlyNewsletter">
							<div className="eachOne">
								<span className="glyphicon glyphicon-arrow-down"></span>
								<p className="month">&nbsp;December 2016&nbsp;</p>
								<span className="glyphicon glyphicon-arrow-down"></span>
							</div>
								<img className="img-responsive" src={December2016} alt="December 2016 newsletter" />
						</div>
					</a>
	      </Grid.Column>

				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/2feOQF4">
						<div className="monthlyNewsletter">
							<div className="eachOne">
								<span className="glyphicon glyphicon-arrow-down"></span>
								<p className="month">&nbsp;November 2016&nbsp;</p>
								<span className="glyphicon glyphicon-arrow-down"></span>
							</div>
								<img className="img-responsive"  src={November2016} alt="November 2016 Newsletter" />
						</div>
					</a>
	      </Grid.Column>

				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/2eC89qh">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;October 2016&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
									<img className="img-responsive"  src={October2016} alt="October 2016 newsletter" />
						</div>
					</a>
	      </Grid.Column>

				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/2cFmlPL">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;September 2016&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
									<img className="img-responsive"  src={September2016} alt="September 2016 newsletter" />
						</div>
					</a>
	      </Grid.Column>
					
				<Grid.Column mobile={16} tablet={8} computer={4}>	
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/2aGP4Sq">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;August 2016&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
								<img className="img-responsive" src={August2016} alt="August 2016 newsletter" />
						</div>
					</a>
	      </Grid.Column>

				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/29EWa8s">
						<div className="monthlyNewsletter">
							<div className="eachOne">
								<span className="glyphicon glyphicon-arrow-down"></span>
								<p className="month">&nbsp;July 2016&nbsp;</p>
								<span className="glyphicon glyphicon-arrow-down"></span>
							</div>
								<img className="img-responsive"  src={July2016} alt="July 2016 Newsletter" />
						</div>
					</a>
	      </Grid.Column>

				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/1t97h31">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;June 2016&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
									<img className="img-responsive"  src={June2016} alt="June 2016 newsletter" />
						</div>
					</a>
	      </Grid.Column>

				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/1snAaYZ">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;May 2016&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
									<img className="img-responsive"  src={May2016} alt="May 2016 newsletter" />
						</div>
					</a>
	      </Grid.Column>
					
				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/20HS04J">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;April 2016&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
								<img className="img-responsive" src={April2016} alt="April 2016 newsletter" />
						</div>
					</a>
	      </Grid.Column>

				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/1Wcmsl2">
						<div className="monthlyNewsletter">
							<div className="eachOne">
								<span className="glyphicon glyphicon-arrow-down"></span>
								<p className="month">&nbsp;March 2016&nbsp;</p>
								<span className="glyphicon glyphicon-arrow-down"></span>
							</div>
								<img className="img-responsive"  src={March2016} alt="March 2016 Newsletter" />
						</div>
					</a>
	      </Grid.Column>

				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/1QTyP3J">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;February 2016&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
									<img className="img-responsive"  src={February2016} alt="February 2016 newsletter" />
						</div>
					</a>
	      </Grid.Column>

				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/1kP2K1f">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;January 2016&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
									<img className="img-responsive"  src={January2016} alt="January 2016 newsletter" />
						</div>
					</a>
	      </Grid.Column>
	    </Grid>

	    <div className="year2017">
				<h3>2015 Newletters</h3>
			</div>

			<Grid centered>
				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/1krt5T5">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;December 2015&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
								<img className="img-responsive" src={December2015} alt="December 2015 newsletter" />
							</div>
					</a>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/1NbhLlu">
						<div className="monthlyNewsletter">
							<div className="eachOne">
								<span className="glyphicon glyphicon-arrow-down"></span>
								<p className="month">&nbsp;November 2015&nbsp;</p>
								<span className="glyphicon glyphicon-arrow-down"></span>
							</div>
								<img className="img-responsive"  src={November2015} alt="November 2015 Newsletter" />
							</div>
					</a>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/1Rfk4as">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;October 2015&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
									<img className="img-responsive"  src={October2015} alt="October 2015 newsletter" />
							</div>
					</a>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={8} computer={4}>
					<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/1NubcQ2">
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;September 2015&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
									<img className="img-responsive"  src={September2015} alt="September 2015 newsletter" />
							</div>
					</a>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={8} computer={4}>
						<a className="newsletterLink" target="_blank" rel="noopener noreferrer" href="http://conta.cc/1RfkdL1">
							<div className="monthlyNewsletter">
									<div className="eachOne">
										<span className="glyphicon glyphicon-arrow-down"></span>
										<p className="month">&nbsp;August 2015&nbsp;</p>
										<span className="glyphicon glyphicon-arrow-down"></span>
									</div>
										<img className="img-responsive"  src={August2015} alt="August 2015 newsletter" />
								</div>
						</a>
					</Grid.Column>
				</Grid>
</div>
		)
	}
}

const styles = {
	topPaddingNewsletter: {
		paddingTop: '65px',
	},
	newsletterHeader: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	newsletterHeaderWords: {
		fontSize: '6em',
		fontFamily: 'Lato',
		fontWeight: 300,
		margin: '0',
		padding: '0',
	},
	glyphiconEnvelope: {
		fontSize: '6em',
	},
	aboutNewsletter: {
		display: 'flex',
		justifyContent: 'center',
		alighItems: 'center',
	},
}

export default Newsletter;