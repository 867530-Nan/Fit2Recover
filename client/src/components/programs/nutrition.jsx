import React, { Component } from 'react'
import {  } from 'react-router-dom'
import axios from 'axios'
import '../../styles/nutrition.css'
import { Grid, Image, Item, Icon, Loader, Segment, Dimmer, Card } from 'semantic-ui-react'
import nutritionApple from '../photodump/nutritionApple.jpg'
import nutritionGroup from '../photodump/nutritionGroup.jpg'
import nutritionMeal from '../photodump/nutritionMeal.jpg'
import nutritionChopping from '../photodump/nutritionChopping.jpg'


import moment from 'moment';



class Nutrition extends Component {
	state = { posts: [], loaded: false }

	componentDidMount() {
		axios.get('api/blogs/index')
		.then( res => this.setState({ posts: res.data, loaded: true }) )
	}

	displayPosts = () => {
		return this.state.posts.items.map( post =>
			<Item className="singlePostEntire">
	      <Item.Image className="blogPic" as='a' src={ post.images[0].url } />
	      <Item.Content className="blogContent" as='a' href={post.url}>
	        <Item.Header className="postAlignCenter"> { post.title } </Item.Header>
	        <Item.Description className="postAlignCenter singlePostContent">
	          { moment(post.published).format("MMMM Do YYYY") }
	        </Item.Description>
	      </Item.Content>
	    </Item>
			)
	}

	render() {
		if(this.state.loaded){
			return (
			<div>
						<div style={styles.topNutritionPadding}></div>

						<div className="nutritionTopPhoto"></div>
						<div className="nourishingRecovery">
							<div className="programWordsh2">Food To Recover promotes connecting with food, with others, and with ourselves.</div>
							<div className="programWordsh3">Together, we learn about the importance of proper nutrition in our daily lives, how to eat mindfully, and how to create our own healthy meals.</div>
						</div>

							<a className="nutritionClassLink" href="https://clients.mindbodyonline.com/classic/ws?studioid=280495&stype=-7&sVT=23&sView=week&sLoc=0" target="_blank" ref="noopener noreferrer" >
							Click here to Sign Up for Classes </a>

				<Grid stackable style={{margin: '0 30px'}}>
				<Grid.Row>
					<Grid.Column className="cardsColumn" computer={12} tablet={10} mobile={16} >
						<Card color="orange" raised centered className="classCard">
					    <Image className="nutritionCardPhoto" src={nutritionChopping} />
					    <Card.Content style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
					      <Card.Header style={{textAlign: 'center', fontSize: '1.18em'}}>
					        Connecting with Food: Cooking Classes
					      </Card.Header>
					      <Card.Description>
					        Have you ever seen broccoli grow? Ever wondered how many different dishes you can make with eggs? Looking for healthy and quick recipes on a budget? Join us for a cooking class and use garden-fresh ingredients from our Food to Recover garden, learn new techniques and combinations in the kitchen, and gain confidence in preparing your own food!
					      </Card.Description>
					      <Card.Description>
					        Did you know doctors are now starting to <a target="_blank" ref="noopener noreferer" href="https://www.google.com/url?q=https%3A%2F%2Fwww.hsph.harvard.edu%2Fnews%2Fhsph-in-the-news%2Fdoctors-patients-healthy-cooking%2F&sa=D&sntz=1&usg=AFQjCNEuKBBiFjInxXBNcDwmPlbbAEsoVQ">prescribe cooking</a> classes for your health?
					      </Card.Description>
					      <Card.Description>
					        Come and connect with your food and learn how it can nourish your body, mind, and spirit in our FTR Kitchen!
					      </Card.Description>
					    </Card.Content>
					  </Card>

						<Card color="teal" raised centered className="classCard">
					    <Image className="nutritionCardPhoto" src={nutritionGroup} />
					    <Card.Content style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
					      <Card.Header style={{textAlign: 'center', fontSize: '1.18em'}}>
					        Connecting with Others: Community Meal Prep
					      </Card.Header>
					      <Card.Description>
					        Preparing food as a group establishes and strengthens connections with others. Come to the FTR Kitchen with a few ingredients and leave with tupperware full of healthy meals for your week. Little to no experience in the kitchen? No problem! We're all here for each other. View the schedule and sign up here. You will be assigned ingredients to bring.
					      </Card.Description>
					    </Card.Content>
					  </Card>



						<Card color="green" raised centered className="classCard">
					    <Image className="nutritionCardPhoto" src={nutritionMeal} />
					    <Card.Content style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
					      <Card.Header style={{textAlign: 'center', fontSize: '1.18em'}}>
					        Connecting with Ourselves: Individual Counseling
					      </Card.Header>
					      <Card.Description>
					        Meet one-on-one with a registered dietitian to meet your personal nutrition goals. With a no-diet and individualized approach, we will work together to help you tune into your hunger cues and nutritional needs that will be the foundation for nourishing yourself. We'll focus on realistic goals and sustainable strategies that will promote healthy and productive living.
					      </Card.Description>
					    </Card.Content>
					  </Card>


						<Card color="red" raised centered className="classCard">
					    <Image className="nutritionCardPhoto" src={nutritionApple} />
					    <Card.Content style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
					      <Card.Header style={{textAlign: 'center', fontSize: '1.18em'}}>
					        Nutrition Services for Treatment Centers
					      </Card.Header>
					      <Card.Description>
					        Food to Recover provides group nutrition education, cooking classes, one-on-one counseling for clients, and facility menu reviews. All services are performed by a registered dietitian. Contact Georgia Gregersen for more information!
					      </Card.Description>
					      <Card.Description>
					        Sample classes include: Mindful Eating, Important Nutrients in Recovery, Nutrition 101, Food and Mood, and many more!
					      </Card.Description>
					    </Card.Content>
					  </Card>
					 </Grid.Column>

					 <Grid.Column computer={4} tablet={6} mobile={16}> 
						<div className="blogTitle"><a style={{color: 'black', fontSize: '20px'}} href="http://food2recover.blogspot.com/"><Icon style={{marginTop: '10px'}} name="feed" color="green" /> Food To Recover Blogposts </a></div>
						<Item.Group className="commentGroup" style={styles.commentGroup}>
							{ this.displayPosts() }	
					  </Item.Group>

					</Grid.Column>

				</Grid.Row>
				</Grid>

				<div className="nutritionBottom">
					<p className="nutritionBottomWords">Proper nutrition is the foundation of good health. It can be especially important during recovery to help keep blood sugars table and reduce cravings, tio improve and stabilize mood, and to replenish nutritional deficiencies that may have occured during substance use.</p>
				</div>
				<div href=""className="nutritionBottomEmail">
					<a href="mailto:ftr@fit2recover.org" className="nutritionBottomEmailWords">
					<Icon name="mail outline" color="white" style={{fontSize: '20px'}}  />
					Email us today to find out more information about Food to Recover
					<Icon name="mail outline" color="white" style={{fontSize: '20px'}}  />
					</a>
				</div>
			</div>
		)
	} else {
		return (
				<Segment style={{height: '600px'}}>
					<Dimmer active>
						<Loader>Loading Blog Posts</Loader>
					</Dimmer>
				</Segment>
			)
		}
	}
}

const styles = {
	topNutritionPadding: {
		paddingTop: '50px',
	},
}

export default Nutrition;