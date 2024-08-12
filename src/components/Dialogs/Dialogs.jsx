import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }) => {
    return (isActive ? `${s.active_dialog}` : `${s.dialog}`)
};

let DialogBase = [
    { id: 1, name: "Misha" },
    { id: 2, name: "Jamilya" },
    { id: 3, name: "Denis" },
    { id: 4, name: "Beer Hub" },
]
let MessageBase = [
    { id: 1, message: 'Hi' },
    { id: 2, message: "How are you" },
    { id: 3, message: "sport?" },
    { id: 4, message: "Wanna beer?" },
]

const DialogList = (props) => {
    return (
        <div>
            <NavLink to={props.id} className={setActive}>{props.name}</NavLink>
        </div>
    )
}

const Chats = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

let DialogElements = DialogBase.map(Dialog => <DialogList id={Dialog.id.toString()} name={Dialog.name} />)
let MessageElements = MessageBase.map(Chat => <Chats message={Chat.message} />)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div>
                {DialogElements}
            </div>
            <div>
                {MessageElements}
            </div>
        </div>
    )
};


export default Dialogs;
