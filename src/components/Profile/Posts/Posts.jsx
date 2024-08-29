import React from "react";
import s from './Posts.module.css';
import Post from "./Post/Post";
import { addPostActionCreator } from "../../../redux/store";
import { updateNewTextActionCreator } from "../../../redux/store";


const Posts = (props) => {

  let PostsElements = props.posts.map((Posts) => (<Post message={Posts.message} count={Posts.count}/>));
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch (addPostActionCreator());
  };

  let listenToChange = () => {
    let text = newPostElement.current.value;
    props.dispatch (updateNewTextActionCreator(text));
  }

  return (
    <div className={s.PostsWrapper}>
      <h3> Posts </h3>
      {PostsElements}
      <div className={s.NewPostBlock}>
        <textarea ref={newPostElement} onChange={listenToChange} value={props.newText}/>
        <button className={s.ButtonBlock} onClick={addPost}> Add Post </button>
      </div>
    </div>
  )
}

export default Posts