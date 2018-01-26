import React, { Component } from "react";
import Post from './Post.js';

class Feed extends Component {
    render(){
        var seeAllPosts = this.props.posts.map(post => {
            return <Post userName={post.username} profPic={post.userimg} postImg={post.imgurl} likes={post.likes} caption={post.description} date={post.date} comments={post.comments} />;
        })
        return(
            <div className="feed home-stuff">
                {seeAllPosts}
            </div>
        );
    }
}

export default Feed;