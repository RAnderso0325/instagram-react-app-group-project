import React, { Component } from "react";
import Stories from "../Stories.js";
import Footer from "./Footer.js";
import ProfileHeader from "./ProfileHeader.js";

class SideNav extends Component{
    render(){
        return(
            <div className="side-nav">
                <ProfileHeader />
                <Stories />
                <Footer />
            </div>
        );
    }
}

export default SideNav;