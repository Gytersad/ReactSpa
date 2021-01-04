import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile/Profile";
import Preloader from "../Preloader/Preloader";
import {getStatusThank, getUserProfileThank, toggleFetching, updateStatusThank} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 13482
        }
        this.props.getUserProfileThank(userId)
        this.props.getStatusThank(userId)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Profile profile={this.props.profile} status={this.props.status} updateStatusThank={this.props.updateStatusThank}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfileThank, toggleFetching, getStatusThank, updateStatusThank}),
    withRouter,
    withAuthRedirect)
(ProfileAPIComponent)
