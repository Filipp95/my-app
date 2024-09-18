import React from "react";
import { NavLink } from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";
import s from './Navbar.module.css';

const setActive = ({ isActive }) => {
    return (isActive ? `${s.active_link}` : `${s.links}`)
};

const Navbar = () => {
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
                    <NavLink to='/users' className={setActive}>Users</NavLink>
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
            <FriendsContainer/>
        </div>
    )
}

export default Navbar