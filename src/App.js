import React, { Component } from 'react';
import Nav from './Layout/Nav.js';
import Footer from "./Layout/Footer.js";
import ProfileHeader from "./Layout/ProfileHeader.js";
import Feed from './Feed/Feed.js';
import Post from './Feed/Post.js';
import Stories from './Stories.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="side-nav-area">
          <ProfileHeader />
          <Stories />
          <Footer />
        </div>
        <Feed />
      </div>
    );
  }
}

export default App;
