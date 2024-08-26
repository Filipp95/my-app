import React from "react";
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

  let PostsElements = props.posts.map((Posts) => (<Post message={Posts.message} count={Posts.count}/>));
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addNewPost (text);
  };

  let listenToChange = () => {
    let inputText = newPostElement.current.value;
    props.updateNewText (inputText);
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