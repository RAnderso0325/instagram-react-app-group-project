import React, { Component } from "react";
import Stories from "../Stories.js";
import Footer from "./Footer.js";
import ProfileHeader from "./ProfileHeader.js";
import AllStories from "../AllStories.js";

class SideNav extends Component{
    render(){
        return(
            <div className="side-nav">
                <ProfileHeader />
                <hr />
                <Stories stories={AllStories.stories}/>
                <hr />
                <Footer />
            </div>
        );
    }
}

export default SideNav;