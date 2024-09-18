import { followAC, setUsersAC, unFollowAC } from "../../redux/users-page-reducer";
import { connect } from "react-redux";
import React from "react";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {dispatch(followAC(userID)) },
    unfollow: (userID) => {  dispatch(unFollowAC(userID)) },
    setUsers: (users) => {  dispatch(setUsersAC(users)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
