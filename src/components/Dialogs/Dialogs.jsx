import React from 'react';
import Chats from './Chats/Chats';
import DialogList from './DialogList/DialogList';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    let DialogElements = props.dialogPage.dialogs.map(Dialog => <DialogList id={Dialog.id.toString()} key={Dialog.id} name={Dialog.name} />)
    let MessageElements = props.dialogPage.messages.map(Chat => <Chats message={Chat.message} key={Chat.id} />)

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.changeMessage(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_visualization}>
                {DialogElements}
            </div>
            <div className={s.chats_visualization}>
                {MessageElements}
                <textarea onChange={onMessageChange} value={props.dialogPage.newMessageText} />
                <button onClick={onAddMessage}> Add message </button>
            </div>
        </div>
    )
};

export default Dialogs;
