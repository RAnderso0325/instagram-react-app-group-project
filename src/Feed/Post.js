import React, { Component } from "react";

class Post extends Component {
    render(){
        var allComments = this.props.comments.map(comment => {
          return(<div className="single-comment">
            <img src={comment.userimg} />
            <h5>{comment.username}</h5>
            <p>{comment.text}</p>
            <p>{comment.date}</p>

          </div>);
        });
        return(
            <div className="single-post">
                <div className="post-header">
                    <img className="user-profile-pic indiv-post-header" src={this.props.profPic} />
                    <h3 className="post-user-name indiv-post-header">{this.props.userName}</h3>
                </div>
                <div className="post-img">
                    <img src={this.props.postImg} />
                </div>
                <div className="post-likes">
                    <h6>{this.props.likes}</h6>
                </div>
                <div className="post-caption">
                    <h5>{this.props.caption}</h5>
                </div>
                <div className="all-comments">
                    {allComments}
                </div>
            </div>
        );
    }
}

export default Post;