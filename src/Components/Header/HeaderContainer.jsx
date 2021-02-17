import React from "react";
import Header from "./Header";
import axios from "axios";
import {authUserThunkCreator, setUserData} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {HeadersApi} from "../../api/api";

class HeaderContainer extends React.Component  {

    componentDidMount() {
        this.props.authUserThunkCreator()
    }

    render() {
        return <Header {...this.props} />

    }

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login

    }
}

export default connect (mapStateToProps, {
    setUserData,
    authUserThunkCreator,

} )(HeaderContainer)