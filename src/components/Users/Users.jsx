import React from "react";
import c from './Users.module.css';
import logo from '../../logo.svg'
import {NavLink} from "react-router-dom";
import * as axios from "axios";


const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pageCount; i++){
        pages.push(i);
    }
    return (
        <div className={c.content}>

            {pages.map(p =>
                <span
                    key={p}
                    className={props.currentPage === p ? c.selectedPage : ''}
                    onClick={ () => { props.OnPageChanged(p)} }
                >
                    {p}
                    </span>
            )}
            {props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : logo} alt="#" className={c.UserAva}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ?
                                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.toggleFollowingProgress(true, u.id)
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '5fa36e5d-9d30-427d-b6c5-81eab3e272e7'
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0){
                                                    props.unfollowAC(u.id)
                                                }
                                                props.toggleFollowingProgress(false, u.id)
                                            })
                                    }}>UnFollow</button>
                                    :
                                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.toggleFollowingProgress(true, u.id)
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '5fa36e5d-9d30-427d-b6c5-81eab3e272e7'
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0){
                                                    props.followAC(u.id)
                                                }
                                                props.toggleFollowingProgress(false, u.id)
                                            })
                                    }}>Follow</button>
                                }
                            </div>
                        </span>
                <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>

            </div>)}
        </div>
    )
}


export default Users
