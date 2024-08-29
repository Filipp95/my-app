const ADD_POST = 'ADD-POST';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'My most favorite players are Del Piero, Buffon and Mandzukic. Who is yours?', count: '20' },
        { id: 2, message: 'Finally I got here!', count: '15' },
        { id: 3, message: 'Juve Merda! Inter is the greatest club in the world!', count: '0' },
      ],
    },
    dialogPage: {
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
      newMessageText: ' ',
    },
    sideBar: {
      friends: [
        { id: 1, name: 'Kirill', ava: './man.png' },
        { id: 2, name: 'Dina', ava: './woman.png' },
        { id: 3, name: 'Leonard', ava: './boy.png' },
      ]
    },
    newText: '',
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state;
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },

  // addNewPost() {
  //   debugger;
  //   let newPost = {
  //     id: 5,
  //     message: this._state.newText,
  //     count: 0
  //   };
  //   this._state.profilePage.posts.push(newPost)
  //   this._state.newText = '';
  //   this._callSubscriber(this._state);
  // },
  // updateNewText(newTextMessage) {
  //   this._state.newText = newTextMessage;
  //   this._callSubscriber(this._state);
  // },
  // addNewMessage() {
  //   let newMessage =
  //   {
  //     id: 1,
  //     message: this._state.newText
  //   };
  //   this._state.dialogPage.messages.push(newMessage);
  //   this._state.newText = '';
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.newText,
        count: 0
      };
      this._state.profilePage.posts.push(newPost)
      this._state.newText = '';
      this._callSubscriber(this._state)
    }
    else if (action.type === 'UPDATE-NEW-TEXT') {
      this._state.newText = action.newText;
      this._callSubscriber(this._state);
    }
    else if (action.type === 'ADD-NEW-MESSAGE') {
      let newMessage =
      {
        id: 1,
        message: this._state.newText
      };
      this._state.dialogPage.messages.push(newMessage);
      this._state.newText = '';
      this._callSubscriber(this._state);
    }
  },
}

export const addPostActionCreator = () => {
  return ({type: ADD_POST})
};

export const addMessageActionCreator = () => {
  return ({ type: ADD_NEW_MESSAGE});
}

export const updateNewTextActionCreator = (text) => {
  return ({type: UPDATE_NEW_TEXT, newText: text})
}



export default store;
window.store = store;

