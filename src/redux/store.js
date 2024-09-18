import profilePageReducer from "./profile-page-reducer";
import dialogsPageReducer from "./dialogs-page-reducer";

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
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state = profilePageReducer(this._state, action)
    this._state = dialogsPageReducer(this._state, action)
    this._callSubscriber(this._state)
    debugger
  },
}

export default store;
window.store = store;

