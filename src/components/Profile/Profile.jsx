import React from "react";
import s from './Profile.module.css';
import Posts from "./Posts/Posts";

function Profile() {
  return (
    <div>
      <div>
        <img className={s.profile_img} src='https://fikiwiki.com/uploads/posts/2022-02/1644725672_31-fikiwiki-com-p-krasivie-kartinki-futbolnoe-pole-36.jpg' />
      </div>
      <div>
        ava + info
      </div>
      <textarea> </textarea>
      <button> Add Post </button>
      <Posts message='My most favorite players are Del Piero, Buffon and Mandzukic. Who is yours?' count='20'/>
      <Posts message='Finally I got here!' count='15'/>
    </div>
  )
}

export default Profile