import React from "react";
import s from './Header.module.css'

function Header () {
    return (
        <header className={s.header}> 
            <img className={s.logo_img} src='https://i.pinimg.com/originals/14/6e/0f/146e0f3a0694840f9349e5edf0e7b1f1.png'/>
        </header>
    )
}

export default Header