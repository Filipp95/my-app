import state from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addNewPost, updateNewText, addNewMessage, subscriber} from './redux/state.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

let reRenderEntireTree = (state) => {
root.render(
  <React.StrictMode> 
    <App state={state} addNewPost={addNewPost} updateNewText={updateNewText} addNewMessage={addNewMessage}/>
  </React.StrictMode>
);
}

reRenderEntireTree(state);
subscriber (reRenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
