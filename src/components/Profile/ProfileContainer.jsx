import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import Profile from "./Profile";
import Preloader from "../Preloader/Preloader";
import {setUserProfile, toggleFetching} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true)
        let userId = this.props.match.params.userId
        if (!userId){userId = 13482}

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUserProfile(response.data)
                //this.props.setTotalUsersCount(response.data.totalCount)
            })
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
    {setUserProfile,toggleFetching})
    (withRouter(ProfileAPIComponent))

export default ProfileContainer
