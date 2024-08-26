import React from "react";
import s from './Profile.module.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div> 
      <ProfileInfo />
      <Posts posts={props.state.profilePage.posts} newText = {props.state.newText}
      addNewPost={props.addNewPost} updateNewText = {props.updateNewText}/>
    </div>
  )
}

export default Profile