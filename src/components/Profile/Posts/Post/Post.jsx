import React from "react";
import s from './Post.module.css';
import profileAva from './../../ProfileInfo/assets/img/my_ava_profile.png'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.profile_ava_img} src={profileAva}/>
            <div>
                {props.message}
            </div>
            <div><button>Like</button>
                <span className={s.likes_count}> Likes: {props.count} </span>
            </div>
        </div>
    )
}

export default Post