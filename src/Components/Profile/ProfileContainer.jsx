import React from "react";
import ProfileInfo from "./Profile_Info/Profile_Info";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {profileThunkCreator, setUserProfile} from "../../Redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {ProfileApi} from "../../api/api";
import {withAuthRedirect} from "../HOC/AuthRedirect";
import {compose} from "redux";





class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.profileThunkCreator(userId)
    }


    render () {


        return (

            <div>

                <Profile {...this.props}
                profile={this.props.profile}
                />
            </div>

        )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,


    }
}


export default compose(
    connect (mapStateToProps, {setUserProfile, profileThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)





let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
// export default connect (mapStateToProps, {
//     setUserProfile,
//     profileThunkCreator
// }) (WithUrlDataContainerComponent)