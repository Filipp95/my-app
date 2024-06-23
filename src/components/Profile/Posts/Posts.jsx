import React from "react";
import s from './Posts.module.css';

function Posts(props) {
  return (
    <div className={s.item}>
      <img className={s.profile_ava_img} src="https://e7.pngegg.com/pngimages/998/963/png-clipart-juventus-logo-illustration-juventus-f-c-juventus-stadium-serie-a-u-s-citta-di-palermo-dream-league-soccer-minal-aidin-emblem-trademark.png" />
      <div>
        {props.message}
      </div>
      <div><button>Like</button>
        <span className={s.likes_count}> Likes: {props.count} </span>
      </div>
    </div>
  )
}

export default Posts