import React from "react";
import c from './Users.module.css';
import * as axios from 'axios';
import logo from '../../logo.svg'

class Users extends React.Component{
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
       return (
           <div className={c.content}>
            {this.props.users.map(u =><div key={u.id}>
                        <span>
                            <div>
                                <img
                                    src={
                                        u.photos.small != null
                                            ?
                                            u.photos.small
                                            :
                                            logo
                                    }
                                    alt="#" className={c.UserAva}/>
                            </div>
                            <div>
                                {u.followed
                                    ?
                                    <button onClick={() => {
                                        this.props.unfollowUser(u.id)
                                    }}>
                                        UnFollow
                                    </button>
                                    :
                                    <button onClick={() => {
                                        this.props.followUser(u.id)
                                    }}>
                                        Follow
                                    </button>
                                }
                            </div>
                        </span>
                <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
            </div>)}
        </div>
       )}
}


export default Users