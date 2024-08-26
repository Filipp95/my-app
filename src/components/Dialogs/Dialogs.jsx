import React from 'react';
import s from './Dialogs.module.css';
import DialogList from './DialogList/DialogList';
import Chats from './Chats/Chats';

const Dialogs = (props) => {
    let DialogElements = props.state.dialogPage.dialogs.map(Dialog => <DialogList id={Dialog.id.toString()} name={Dialog.name} />)
    let MessageElements = props.state.dialogPage.messages.map(Chat => <Chats message={Chat.message} />)
    let newMessageElement = React.createRef();

    let addMessage = () => {
        let message = newMessageElement.current.value;
        props.addNewMessage(message);
    }

    let listenToChange = () => {
        let newText = newMessageElement.current.value;
        props.updateNewText(newText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_visualization}>
                {DialogElements}
            </div>
            <div className={s.chats_visualization}>
                {MessageElements}
                <textarea ref={newMessageElement} onChange={listenToChange} value={props.state.newText} />
                <button onClick={addMessage}> add Message </button>
            </div>
        </div>
    )
};

export default Dialogs;
