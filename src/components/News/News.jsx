import React from 'react';
import s from './News.module.css';
import v from './assets/videos/mandzukic.mp4';

const News = (props) => {

    return (
        <div className={s.news_wrapper}>
            Mandzukic scored Goal vs Real-Madrid. 
            <video controls src={v}></video>
        </div>
    )
}

export default News; 