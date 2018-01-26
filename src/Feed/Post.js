import React, { Component } from "react";
import heart from '../images/heart.png';
import comment from '../images/comment.png';

class Post extends Component {
    render(){
        var allComments = this.props.comments.map(comment => {
          return(
            <div className="single-comment">
                <div className="comment-stuff"><h5>{comment.username}</h5>
                </div><div className="comment-stuff"><p>{comment.text}</p></div>
            </div>
          );
        });
        return(
            <div className="single-post">
                <div className="post-header">
                    <img className="user-profile-pic post-prof-pic" src={this.props.profPic} />
                    <div className="indiv-post-header"><h3 className="post-user-name">{this.props.userName}</h3></div>
                </div>
                <div className="post-img">
                    <img src={this.props.postImg} />
                </div>
                <div className="post-like-bar">
                    <img className="post-like-stuff" src={heart}/>
                    <img className="post-like-stuff" src={comment}/>
                </div>
                <div className="post-likes">
                    <h6>{this.props.likes} Me gusta</h6>
                </div>
                <div className="post-caption">
                    <h5>{this.props.caption}</h5>
                </div>
                <div className="all-comments">
                    {allComments}
                </div>
                <div className="post-date">
                    <p>{this.props.date}</p>
                </div>
            </div>
        );
    }
}

export default Post;