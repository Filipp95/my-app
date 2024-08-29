import React from "react";
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const setActive = ({ isActive }) => {
    return (isActive ? `${s.active_link}` : `${s.links}`)
};

function Navbar(props) {
    let friendsList=props.friends.map(Friend => <Friends name={Friend.name} ava={Friend.ava}/>) 
    return (
        <div className={s.wrapper}>
            <nav className={`${s.item} ${s.nav}`}>
                <div>
                    <NavLink to="/profile" className={setActive}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs' className={setActive}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to='/news' className={setActive}>News</NavLink>
                </div>
                <div>
                    <NavLink to='/music' className={setActive}>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/settings' className={setActive}>Settings</NavLink>
                </div>
            </nav>
            <div className={s.friends_text}>
                Friends
            </div>
            <div className={s.friends_list}>
                {friendsList}
            </div>
        </div>
    )
}

export default Navbar