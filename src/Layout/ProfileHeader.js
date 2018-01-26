import React, { Component } from "react";
import profPic from '../images/winnieFrenchie.png';

class ProfileHeader extends Component {
    render(){
        return(
            <div className="profile-header-home">
                <div className="profile-home-img profile-header">
                    <img className="user-profile-pic" src={profPic} />
                </div>
                <div className="user-info profile-header">
                    <div className="user-display-name">
                        <h4>Winston Churchill</h4>
                    </div>
                    <div className="user-username">
                        <p>winsti_of_the_church</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileHeader;