import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.profile_img} src='https://fikiwiki.com/uploads/posts/2022-02/1644725672_31-fikiwiki-com-p-krasivie-kartinki-futbolnoe-pole-36.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava + info
            </div>
        </div>
    )
}

export default ProfileInfo