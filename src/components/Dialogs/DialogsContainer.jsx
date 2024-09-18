import React from 'react';
import { addMessageActionCreator } from '../../redux/dialogs-page-reducer';
import { updateNewMessageTextActionCreator } from '../../redux/dialogs-page-reducer';
import Dialogs from './Dialogs';
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => { dispatch(addMessageActionCreator()) },
        changeMessage: (text) => { dispatch(updateNewMessageTextActionCreator(text)); }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
