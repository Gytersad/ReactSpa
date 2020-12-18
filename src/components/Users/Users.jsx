import React from "react";
import c from './Users.module.css';


const Users = (props) => {


    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://cdna.artstation.com/p/assets/images/images/024/241/176/large/_z-ed_-da.jpg?1581777298',
            followed: false,
            fullName: 'Yakov',
            status: 'YO!',
            location: {city: 'Moscow', country: 'Russia'}
        }, {
            id: 2,
            photoUrl: 'https://cdna.artstation.com/p/assets/images/images/024/241/176/large/_z-ed_-da.jpg?1581777298',
            followed: false,
            fullName: 'Igor',
            status: 'POG!',
            location: {city: 'Omsk', country: 'Russia'}
        }, {
            id: 3,
            photoUrl: 'https://cdna.artstation.com/p/assets/images/images/024/241/176/large/_z-ed_-da.jpg?1581777298',
            followed: true,
            fullName: 'Ivan',
            status: 'Hello!',
            location: {city: 'Minsk', country: 'Belarus'}
        }])
    }
    return (
        <div className={c.content}>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl} alt="#" className={c.UserAva}/>
                            </div>
                            <div>
                                {u.followed
                                    ?
                                    <button onClick={() => {
                                        props.unfollowUser(u.id)
                                    }}>
                                        UnFollow
                                    </button>
                                    :
                                    <button onClick={() => {
                                        props.followUser(u.id)
                                    }}>
                                        Follow
                                    </button>
                                }
                            </div>
                        </span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </div>
                )
            }
        </div>
    );


}

export default Users
