import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import brandLogo from '../images/instagram-logo-black.png';
import brandName from '../images/instagram-name.svg';
import exploreImg from '../images/compass.png';
import heartImg from '../images/heart.png';
import profileImg from '../images/profile.png';



class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: ''
        }
    }

    doSearch = (e) => {
        this.setState({search: e.target.value})
        console.log(this.state.search)
    }

    render(){
        return(
            <Router>
                <div className="navbar">
                    <ul>
                        <li><Link to="/"><img className="brand-logo nav-img" src={brandLogo} /></Link></li>
                        <li><Link to="/"><img className="brand-name nav-img" src={brandName} /></Link></li>
                        <li><div><input className="search-bar" value={this.state.search} onChange={this.doSearch} placeholder="Search" /></div></li>
                        <li><Link to="/explore"><img className="expore-img nav-img" src={exploreImg} /></Link></li>
                        <li><Link to="/notifications"><img className="heart-img nav-img" src={heartImg} /></Link></li>
                        <li><Link to="/profile"><img className="profile-img nav-img" src={profileImg} /></Link></li>
                    </ul>
                </div>
            </Router>
        );
    }
}

export default Nav;