import React from "react";
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

  let PostsElements = props.posts.map((Posts) => (<Post message={Posts.message} count={Posts.count} />));
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={s.PostsWrapper}>
      <h3> Posts </h3>
      <div className={s.NewPostBlock}>
        <textarea ref={newPostElement}> </textarea>
        <button className={s.ButtonBlock} onClick={addPost}> Add Post </button>
      </div>
      {PostsElements}
    </div>
  )
}

export default Posts