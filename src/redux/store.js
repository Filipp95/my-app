let store = {
  _profilePage: {
    posts: [
      { id: 1, message: 'My most favorite players are Del Piero, Buffon and Mandzukic. Who is yours?', count: '20' },
      { id: 2, message: 'Finally I got here!', count: '15' },
      { id: 3, message: 'Juve Merda! Inter is the greatest club in the world!', count: '0' },
    ],
  },
  _dialogPage: {
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
  _sideBar: {
    friends: [
      { id: 1, name: 'Kirill', ava: './man.png' },
      { id: 2, name: 'Dina', ava: './woman.png' },
      { id: 3, name: 'Leonard', ava: './boy.png' },
    ]
  },
  _newText: '',

  getPageInformation() {
    return {
      profilePage: this._profilePage,
      dialogPage: this._dialogPage,
      sideBar: this._sideBar,
      newText: this._newText,
    }
  },

  addNewPost() {
    let newPost = {
      id: 5,
      message: postMessage,
      count: 0
    };
    this._profilePage.posts.push(newPost)
    reRenderEntireTree();
    this.newText = '';
  },

  updateNewText(newTextMessage) {
    this._newText = newTextMessage;
    reRenderEntireTree();
  },

  addNewMessage(textMessage) {
    let newMessage =
    {
      id: 1,
      message: textMessage
    };
    this.dialogPage.messages.push(newMessage)
    reRenderEntireTree();
    this._newText = '';
  },

  subscriber(observer) {
    reRenderEntireTree = observer;
  }
}

export default store;

