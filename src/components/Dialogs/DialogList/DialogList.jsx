import React from 'react';
import s from './DialogList.module.css';
import { NavLink } from 'react-router-dom';
import juveAva from './assets/img/juve_ava.png';

const setActive = ({ isActive }) => {
    return (isActive ? s.active_dialog : s.dialog_list_text)
};

const DialogList = (props) => {
    return (
        <div className={s.dialog_list}>
            <div className={s.image_styles}>
                <img src={juveAva} alt='Profile Avatar' className={s.profile_ava_img} />
            </div>
            <div className={s.text_styles}>
                <NavLink to={props.id} className={setActive}>{props.name}</NavLink>
            </div>

        </div>
    )
};

export default DialogList;
