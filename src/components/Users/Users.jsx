import React from "react";
import { NavLink } from "react-router-dom";
import { userAPI } from "../../api/api";
import s from './Users.module.css';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(page => {
                    return (
                        <span className={props.currentPage === page ? s.selected_page : s.pages}
                            onClick={() => { props.onPageChanged(page) }}
                        >{page}
                        </span>)
                })}
            </div>
            {props.users.map(user =>
                <div key={user.id}>
                    <span>
                        <div><NavLink to={'/profile/' + user.id}><img src={user.photos.small === null ? './man.png' : user.photos.small} className={s.usersAva} /></NavLink></div>
                        <div>
                            {user.followed ?
                                <button disabled={props.isFollowProcessing.some(id => id === user.id)}
                                    onClick={() => { props.followTC(user.id) }}>Unfollow</button>
                                : <button disabled={props.isFollowProcessing.some(id => id === user.id)}
                                    onClick={() => { props.unFollowTC(user.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.city"}</div>
                        <div>{"user.location.country"}</div>
                    </span>
                </div>)}
        </div>)
}

export default Users;