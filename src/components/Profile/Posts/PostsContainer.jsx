import React from "react";
import { addPostActionCreator } from "../../../redux/profile-page-reducer";
import { updateNewPostTextActionCreator } from "../../../redux/profile-page-reducer";
import Posts from "./Posts";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    changePost: (text) => dispatch(updateNewPostTextActionCreator(text))
  }
}

const PostsContainer = connect (mapStateToProps, mapDispatchToProps)(Posts);


export default PostsContainer