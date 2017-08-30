import React, { Component } from 'react'
import {  } from 'react-router-dom'
import axios from 'axios'
import '../../styles/nutrition.css'
import { Grid, Image, Item, Icon, Loader, Segment, Dimmer } from 'semantic-ui-react'
import thumbnail from '../photodump/gallery4c.jpeg'
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
	        <Item.Header> { post.title } </Item.Header>
	        <Item.Description className="singlePostContent">
	          { moment(post.published).format("dddd, MMMM Do YYYY") }
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
							<div className="programWordsh2">Food To Recover promotes proper nourishment, self-love, and healthy eating for the Salt Lake City-based FTR Gym and Community Center.</div>
							<div className="programWordsh3">Good nutrition provides energy, reduces cravings, and can  make you FEEL better, as well.</div>
						</div>

				<Grid>
					<Grid.Column computer={11} tablet={11} mobile={16}>
						<div className="program communityPrep">
							<h3>Community Meal Prep</h3>
							<p className="programWords">Preparing food as a group establishes and strengthens connections with our neighbors. These events are part educational, part culinary, and always delicious. Come for the food, stay for the conversation.</p>
							<img src="" alt="Image Placeholder" />
						</div>

						<div className="program cookingClass">
							<h3>Cooking Classes</h3>
							<p className="programWords">How many ways can you cook an egg? What's the difference between saute and pan fry? Cooking classes introduce us to new foods, broaden our knowledge of nutrients, and instill confidence in the kitchen.</p>
							<p className="programWords">Classes range from FTR's Member Guest Chef and various ways to cook an egg, to marinating meats and backyard grilling.</p>  
							<img src="" alt="Image Placeholder" />
						</div>
				
						<div className="program treatmentCenter">
							<h3>Treatment Centers &amp; Group Discussions</h3>
							<p className="programWords">Talking about anything related to food can be awkward, embarrassing, and downright uncomfortable. Group discussions allow us to connect through our vulnerabilities, and recognize we're all in this together, supporting eachother along the way.</p>
							<img src="" alt="Image Placeholder" />
						</div>

						<div className="program individualCounsel">
							<h3>Individual Counseling</h3>
							<p className="programWords">Whether interested in meal planning, coaching, or balancing nutrition with fitness, Individualized Counseling offers an opportunity to talk with a dietician and intentionally understand the mind - body connection.</p>
							<img src="" alt="Image Placeholder" />
						</div>
					</Grid.Column>

					<Grid.Column computer={5} tablet={5} mobile={16}> 
						<div className="blogTitle"><a style={{color: 'black'}} href="http://food2recover.blogspot.com/"><Icon style={{marginTop: '10px'}} name="feed" color="green" /> Food To Recover Blogposts </a></div>
						<Item.Group style={styles.commentGroup}>
							{ this.displayPosts() }	
					  </Item.Group>

					</Grid.Column>

				</Grid>

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
		paddingTop: '65px',
	},
	commentGroup: {
		borderRadius: '20px',
		backgroundColor: '#99E889', 
		padding: '14px', 
		height: '96%', 
		margin: '5px'
	},
}

export default Nutrition;