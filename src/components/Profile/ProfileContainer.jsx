import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import Preloader from "../Preloader/Preloader";
import {getUserProfileThank, toggleFetching} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){userId = 13482}
        this.props.getUserProfileThank(userId)
    }

    render() {
        return<>
                { this.props.isFetching ? <Preloader/> : null}
                <Profile profile={this.props.profile}/>
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const ProfileContainer = connect(mapStateToProps,
    {getUserProfileThank,toggleFetching})
    (withRouter(ProfileAPIComponent))

export default ProfileContainer
