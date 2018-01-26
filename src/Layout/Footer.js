import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <ul>
                    <li><a href="https://www.instagram.com/about/us">About Us</a></li>
                    <li><a href="https://help.instagram.com">Support</a></li>
                    <li><a href="blog.instagram.com">Blog</a></li>
                    <li><a href="https://instagram-press.com">Press</a></li>
                    <li><a href="https://www.instagram.com/developer/">API</a></li>
                    <li><a href="https://www.instagram.com/about/jobs">Jobs</a></li>
                    <li><a href="https://help.instagram.com/155833707900388">Privacy</a></li>
                    <li><a href="https://help.instagram.com/478745558852511">Terms</a></li>
                    <li><a href="https://www.instagram.com/explore/locations/">Directory</a></li>
                    <li><a href="https://www.instagram.com/directory/profiles">Profiles</a></li>
                    <li>Languages</li>
                </ul>
                <span>&copy; INSTAGRAM {new Date().getFullYear()}</span>
            </div>
        );
    }
}

export default Footer;