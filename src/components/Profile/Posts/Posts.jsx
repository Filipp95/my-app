import React from "react";
import s from './Posts.module.css';
import Post from "./Post/Post";


const Posts = (props) => {

  let PostsElements = props.profilePage.posts.map(Posts => (<Post message={Posts.message} key={Posts.id} count={Posts.count} />));
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.changePost(text);
  }

  return (
    <div className={s.PostsWrapper}>
      <h3> Posts </h3>
      {PostsElements}
      <div className={s.NewPostBlock}>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText} />
        <button className={s.ButtonBlock} onClick={addPost}>Add Post</button>
      </div>
    </div>
  )
}

export default Posts