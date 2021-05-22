import React, { Component } from 'react';
import Directory from './directoryComponents';
import CampsiteInfo from './campsiteInfoComponent';
import Header from './headerComponent';
import Footer from './footerComponent'
import Home from './homeComponent';
import Contact from './contactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
          
        };
    }
   
    render() {
        const HomePage = () => {
            return(
                <Home />
            )
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path = '/home' component={HomePage} />
                    <Route exact path = '/directory' render= { ()=> <Directory campsites ={this.state.campsites} />
                    } />
                    <Route exact path = '/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;