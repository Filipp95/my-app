import React from 'react';
import s from './Dialogs.module.css';
import DialogList from './DialogList/DialogList';
import Chats from './Chats/Chats';
import { addMessageActionCreator } from '../../redux/store';
import { updateNewTextActionCreator } from '../../redux/store';


const Dialogs = (props) => {
    let DialogElements = props.state.dialogPage.dialogs.map(Dialog => <DialogList id={Dialog.id.toString()} name={Dialog.name} />)
    let MessageElements = props.state.dialogPage.messages.map(Chat => <Chats message={Chat.message} />)

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let listenToChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewTextActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_visualization}>
                {DialogElements}
            </div>
            <div className={s.chats_visualization}>
                {MessageElements}
                <textarea onChange={listenToChange} value={props.state.newText} />
                <button onClick={addMessage}> Add message </button>
            </div>
        </div>
    )
};

export default Dialogs;
