import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFetching, toggleFollowingProgress,
    unfollowAC
} from "../../redux/usersReducer";
import React from "react";
import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleFetching(false)
                this.props.setUsersAC(data.items)
                //this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    OnPageChanged = (p) => {
        this.props.setCurrentPageAC(p)
        this.props.toggleFetching(true)
        usersAPI.getUsers(p, this.props.pageSize).then(data => {
                this.props.toggleFetching(false)
                this.props.setUsersAC(data.items)
            })

    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null}
        <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            totalUsersCount = {this.props.totalUsersCount}
            OnPageChanged={this.OnPageChanged}
            unfollowAC={this.props.unfollowAC}
            followAC={this.props.followAC}
            followingInProgress={this.props.followingInProgress}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

 /*let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followAC(userId))
        },
        unfollowUser: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },

    }
}*/

const UsersContainer = connect(mapStateToProps,{followAC,unfollowAC,setUsersAC,
        setCurrentPageAC, setTotalUsersCountAC,toggleFetching,toggleFollowingProgress})(UsersAPIComponent)

export default UsersContainer
