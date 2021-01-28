import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
 getUsersThunkCreator,
    setCurrentPageAC, unFollow,
} from "../../redux/usersReducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";


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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
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
    /*withAuthRedirect*/
)
(UsersAPIComponent)


