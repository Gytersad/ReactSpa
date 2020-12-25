import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
 getUsersThunkCreator,
    setCurrentPageAC, unFollow,

} from "../../redux/usersReducer";
import React from "react";
import Preloader from "../Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    OnPageChanged = (pageNumber) => {
        this.props.setCurrentPageAC(pageNumber)
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null}
        <Users {...this.props} OnPageChanged={this.OnPageChanged}/>
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


export default compose(
    connect(mapStateToProps,{follow,unFollow,setCurrentPageAC, getUsersThunkCreator}),
    withAuthRedirect
)
(UsersAPIComponent)


