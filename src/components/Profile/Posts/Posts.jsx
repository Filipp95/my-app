import React from "react";
import s from './Posts.module.css';
import Post from "./Post/Post";

let PostsBase = [
  { id: 1, message: 'My most favorite players are Del Piero, Buffon and Mandzukic. Who is yours?', count: '20' },
  { id: 2, message: 'Finally I got here!', count: '15' },
  { id: 3, message: 'Juve Merda! Inter is the greatest club in the world!', count: '0' },
]

let PostsElements = [PostsBase.map(Posts => <Post message={Posts.message} count={Posts.count} />)]

function Posts(props) {
  return (
    <div className={s.PostsWrapper}>
      <h3> Posts </h3>
      <div className={s.NewPostBlock}>
        <textarea> </textarea>
        <button className={s.ButtonBlock}> Add Post </button>
      </div>
      {PostsElements}
    </div>
  )
}

export default Posts