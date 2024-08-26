let reRenderEntireTree = () => {
}

let state = {
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
  newText:'',
};

export let addNewPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    count: 0
  };
  state.profilePage.posts.push(newPost)
  reRenderEntireTree(state);
  state.newText = "";
};

export let updateNewText = (newTextMessage) => {
  state.newText = newTextMessage;
  reRenderEntireTree(state);
}

export let addNewMessage = (textMessage) => {
  let newMessage =
  {id: 1,
    message: textMessage  };
  state.dialogPage.messages.push(newMessage)
  reRenderEntireTree(state);
  state.newText = "";
}

export let subscriber = (observer) => {
  reRenderEntireTree = observer;
}

export default state;

