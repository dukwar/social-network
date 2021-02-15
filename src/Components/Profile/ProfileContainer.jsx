import React from "react";
import ProfileInfo from "./Profile_Info/Profile_Info";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {ProfileApi} from "../../api/api";





class ProfileContainer extends React.Component {


    componentDidMount() {

        let userId = this.props.match.params.userId

       ProfileApi.setUser(userId).then((data) => {
            this.props.setUserProfile(data)

        })
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
        profile: state.profilePage.profile

    }

}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent)