const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addMessageActionCreator = () => {
    return ({ type: ADD_NEW_MESSAGE });
  }
export const updateNewMessageTextActionCreator = (text) => {
    return ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text })
  }

  let initialState = {
    dialogs: [
        { id: 1, name: "Misha" },
        { id: 2, name: "Jamilya" },
        { id: 3, name: "Denis" },
        { id: 4, name: "Beer Hub" },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: "How are you" },
        { id: 3, message: "sport?" },
        { id: 4, message: "Wanna beer?" },
      ],
    newMessageText: '',
}
const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            return {...state,
                messages: [...state.messages, newMessage],
                newMessageText:'',
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, 
                newMessageText: action.newMessageText,
            };
        default:
            return state
    }
}
export default dialogsPageReducer;