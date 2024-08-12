import React from 'react';
import s from './Music.module.css';
import song from './assets/songs/Wolves_My_Time.mp3';

const Music = (props) => {
    return (
        <div className={s.music_wrapper}>
            It's time!
            <audio controls src={song}></audio>
        </div>
    )
}

export default Music; 