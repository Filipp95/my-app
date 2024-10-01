import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profilePhoto={props.profilePhoto} userFullName={props.userFullName} userInfo={props.userInfo} userContacts={props.userContacts} 
      jobStatus = {props.jobStatus} jobStatusDescription = {props.jobStatusDescription}/>
      <PostsContainer />
    </div>
  )
}

export default Profile