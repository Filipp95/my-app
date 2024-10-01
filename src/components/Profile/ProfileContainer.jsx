import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { profileAPI } from "../../api/api";
import { checkJobStatus, setJobStatusDescription, setUserContacts, setUserFullName, setUserInfo, setUserProfilePhoto } from "../../redux/profile-page-reducer";
import Profile from "./Profile";

const ProfileContainer = (props) => {
  let {userID} = useParams()
  if (!userID)  {
    userID=2;
  }
  
  useEffect (() => {
    profileAPI.getProfile(userID).then(data => {
      props.setUserProfilePhoto(data.photos)
      props.setUserFullName(data.fullName)
      props.setUserInfo(data.aboutMe)
      props.setUserContacts(data.contacts)
      props.checkJobStatus(data.lookingForAJob)
      props.setJobStatusDescription(data.lookingForAJobDescription)
    })}, 
    [userID]);

  return (
      <div>
        <Profile profilePhoto={props.profilePhoto} userFullName={props.fullName} userInfo={props.userInfo}
        userContacts = {props.userContacts} jobStatus = {props.jobStatus} jobStatusDescription = {props.jobStatusDescription}/>
      </div>
    )
}

let mapStateToProps = (state) => ({
  profilePhoto: state.profilePage.profilePhoto,
  fullName: state.profilePage.fullName,
  userInfo: state.profilePage.userInfo,
  userContacts: state.profilePage.userContacts,
  jobStatus: state.profilePage.jobStatus,
  jobStatusDescription: state.profilePage.jobStatusDescription,
});

export default connect(mapStateToProps, { setUserProfilePhoto, setUserFullName, setUserInfo, setUserContacts, checkJobStatus, setJobStatusDescription })
(ProfileContainer); 