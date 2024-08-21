import React from 'react';
import s from './Chats.module.css';
import profileAva from './../../Profile/ProfileInfo/assets/img/my_ava_profile.png'
import juveAva from './../DialogList/assets/img/juve_ava.png'

const Chats = (props) => {
    return (
        <div className={s.chat_positioning}>
            <div className={s.message}>
                <img src={juveAva} className={s.profile_ava_img} />
                <div className={s.message_text}>{props.message}</div>
            </div>
            <div className={s.my_message}>
                <img src={profileAva} className={s.profile_ava_img} />
                <div className={s.message_text}>{props.message}</div>
            </div>
        </div>
    )
}

export default Chats;
