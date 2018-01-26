import React, { Component } from "react";
import Story from './Story.js';

class Stories extends Component {
    render(){
        var seeAllStories = this.props.stories.map(story => {
            return (
                <Story profPic={story.profPic} userName={story.userName} hours={story.hours} />
            );
        })
        return(
            <div className="all-stories-area">
                {seeAllStories}
            </div>
        );
    }
}

export default Stories;