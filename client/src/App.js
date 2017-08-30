import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer'
import './App.css';
import History from './components/aboutus/history';
import Philosophy from './components/aboutus/philosophy';
import Testimonials from './components/aboutus/testimonials';
import Fitness from './components/programs/fitness';
import Nutrition from './components/programs/nutrition';
import CommunityService from './components/programs/communityservice';
import CreativeArts from './components/programs/creativearts';
import Board from './components/teamftr/board';
import Contact from './components/teamftr/contact';
import CurrentStaff from './components/teamftr/currentstaff';
import Gallery from './components/media/gallery';
import Newsletter from './components/media/newsletter';
import Home from './components/ftr_home'
import NoMatch from './components/nomatch'
import Calendar from './components/calendar'


class App extends Component {
  render() {
    return (
      <div> 
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/calendar' component={Calendar}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/history' component={History}/>
          <Route exact path='/philosophy' component={Philosophy}/>
          <Route exact path='/testimonials' component={Testimonials}/>
          <Route exact path='/fitness' component={Fitness}/>
          <Route exact path='/nutrition' component={Nutrition}/>
          <Route exact path='/communityservice' component={CommunityService}/>
          <Route exact path='/creativearts' component={CreativeArts}/>
          <Route exact path='/board' component={Board}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/currentstaff' component={CurrentStaff}/>
          <Route exact path='/gallery' component={Gallery}/>
          <Route exact path='/newsletterarchive' component={Newsletter}/>
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
