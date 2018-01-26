import React, { Component } from 'react';
import Feed from "./Feed/Feed.js";
import SideNav from "./Layout/SideNav.js";

class Home extends Component {
    render(){
        return(
            <div className="home-page">
                <Feed />
                <SideNav />
            </div>
        );
    }
}

export default Home;