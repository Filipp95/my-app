const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => {
    return ({ type: ADD_POST })
};
export const updateNewPostTextActionCreator = (text) => {
    return ({ type: UPDATE_NEW_POST_TEXT, newPostText: text })
}

let initialState = {
    posts: [
        { id: 1, message: 'My most favorite players are Del Piero, Buffon and Mandzukic. Who is yours?', count: '20' },
        { id: 2, message: 'Finally I got here!', count: '15' },
        { id: 3, message: 'Juve Merda! Inter is the greatest club in the world!', count: '0' },
    ],
    newPostText: '',
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length+1,
                message: state.newPostText,
                count: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''};
        case UPDATE_NEW_POST_TEXT:
            return {...state,
                newPostText: action.newPostText
            }
        default:
            return state
    }
}
export default profilePageReducer;