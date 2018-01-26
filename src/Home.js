import React, { Component } from 'react';
import Feed from "./Feed/Feed.js";
import SideNav from "./Layout/SideNav.js";
import AllPosts from "./AllPosts.js";

class Home extends Component {
    render(){
        return(
            <div className="home-page">
                <Feed posts={AllPosts.posts}/>
                <SideNav />
            </div>
        );
    }
}

export default Home;