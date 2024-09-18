import React from "react"
import s from './Users.module.css';
import * as axios from 'axios';

let Users = (props) => {
    
if (props.users.length === 0) {
    props.setUsers([
        { id: 1, followed: false, fullName: 'Natasha', location: { city: 'Moscow', country: 'Russia' }, status: 'We will meet!', ava: './woman.png' },
        { id: 2, followed: true, fullName: 'Alexey', location: { city: 'Astana', country: 'Kazakhstan' }, status: 'Juve is the best', ava: './man.png' },
        { id: 3, followed: false, fullName: 'Misha', location: { city: 'Moscow', country: 'Russia' }, status: 'I like Real Madrid', ava: './boy.png' },
        { id: 4, followed: true, fullName: 'Fabrizio', location: { city: 'Palermo', country: 'Italy' }, status: 'Who cares?', ava: './man.png' },
    ],)
}

    return (
        <div>
            {props.users.map(user =>
                    <div key={user.id}>
                        <span>
                            <div><img src={user.ava} className={s.usersAva} /></div>
                            <div>
                                {user.followed ?
                                    <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button> :
                                    <button onClick={() => { props.follow(user.id) }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.city}</div>
                            <div>{user.location.country}</div>
                        </span>
                    </div>
                )
            }
        </div>
    )
}



export default Users