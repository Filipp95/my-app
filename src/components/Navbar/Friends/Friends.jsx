import React from "react";
import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={s.friends_block}>
            <img src={props.ava} alt="friends ava" className={s.friends_ava} />
            {props.name}
        </div>
    )
}

export default Friends;