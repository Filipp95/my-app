import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-page-reducer';
import Dialogs from './Dialogs';
import { compose } from "redux";

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => { dispatch(addMessageActionCreator()) },
        changeMessage: (text) => { dispatch(updateNewMessageTextActionCreator(text)); }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Dialogs)