import React from "react";
import ProfileInfo from "./Profile_Info/Profile_Info";




let Profile = (props) => {
    return (

        <div>

            <ProfileInfo profile={props.profile} />



        </div>

    )
}

export default Profile