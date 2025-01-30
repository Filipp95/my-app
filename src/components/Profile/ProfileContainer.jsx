  import React, { useEffect } from "react";
  import { connect } from "react-redux";
  import { useParams } from "react-router-dom";
  import { compose } from "redux";
  import { getProfileTC, getStatusTC, updateStatusTC } from "../../redux/profile-page-reducer";
  import Profile from "./Profile";

  const ProfileContainer = (props) => {

    let {userID} = useParams()
    if (!userID)  {
      userID=31666;
    }

    const {getStatusTC, getProfileTC, updateStatusTC, status} = props
    
    useEffect (() => {
      getProfileTC(userID)
      getStatusTC(userID)
  }, 
      [userID, status]);

    return (
        <div>
          <Profile profilePhoto={props.profilePhoto} userFullName={props.fullName} userInfo={props.userInfo}
          userContacts = {props.userContacts} jobStatus = {props.jobStatus} jobStatusDescription = {props.jobStatusDescription}
          status={props.status} updateStatusTC={props.updateStatusTC}/>
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
    status: state.profilePage.status,

  });

  export default compose (connect(mapStateToProps,{getProfileTC, getStatusTC, updateStatusTC})) (ProfileContainer)

