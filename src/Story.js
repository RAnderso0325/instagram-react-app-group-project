import React, {Component} from 'react';

class Story extends Component {
    render(){
        return (
            <div className="story-row">
                <div className="profile-home-img story-header">
                    <img className="user-profile-pic story-pic" src={this.props.profPic} />
                </div>
                <div className="user-info story-header">
                    <div className="user-display-name user-info-story">
                        <h4>{this.props.userName}</h4>
                    </div>
                    <div className="hours-since-post user-info-story">
                        <p>{this.props.hours}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Story;