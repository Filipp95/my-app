import React from "react";
import FriendsList from "./FriendsList/FriendsList";
import s from './Friends.module.css'

const Friends = (props) => {
    let friendsList = props.sideBarPage.map(Friend => <FriendsList name={Friend.name} key={Friend.id} ava={Friend.ava} />)

    return (
        <div>
            <div className={s.friends_title}>
                Friends
            </div>
            <div className={s.friends_list}>
                {friendsList}
            </div>
        </div>
    )
}
export default Friends;

