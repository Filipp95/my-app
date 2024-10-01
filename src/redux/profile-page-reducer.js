const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE_PHOTO = 'SET_USER_PROFILE_PHOTO';
const SET_USER_FULL_NAME = 'SET_USER_FULL_NAME';
const SET_USER_INFO = 'SET_USER_INFO';
const SET_USER_CONTACTS = 'SET_USER_CONTACTS';
const CHECK_JOB_STATUS = 'CHECK_JOB_STATUS';
const SET_JOB_STATUS_DESCRIPTION = 'SET_JOB_STATUS_DESCRIPTION';

export const addPostActionCreator = () => { return ({ type: ADD_POST }) };
export const updateNewPostTextActionCreator = (text) => { return ({ type: UPDATE_NEW_POST_TEXT, newPostText: text }) }
export const setUserProfilePhoto = (profilePhoto) => { return ({ type: SET_USER_PROFILE_PHOTO, profilePhoto }) }
export const setUserFullName = (fullName) => { return ({ type: SET_USER_FULL_NAME, fullName }) }
export const setUserInfo = (userInfo) => { return ({ type: SET_USER_INFO, userInfo }) }
export const setUserContacts = (userContacts) => { return ({ type: SET_USER_CONTACTS, userContacts }) }
export const checkJobStatus = (jobStatus) => { return ({ type: CHECK_JOB_STATUS, jobStatus }) }
export const setJobStatusDescription = (jobStatusDescription) => { return ({ type: SET_JOB_STATUS_DESCRIPTION, jobStatusDescription }) }

let initialState = {
    profilePhoto: {},
    fullName: '',
    userInfo: '',
    userContacts: {},
    jobStatusDescription: '',
    posts: [
        { id: 1, message: 'My most favorite players are Del Piero, Buffon and Mandzukic. Who is yours?', count: '20' },
        { id: 2, message: 'Hey HEY Hey!', count: '15' },
        { id: 3, message: 'Finally I got here!', count: '0' },
    ],
    newPostText: '',
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                count: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            }
        case SET_USER_PROFILE_PHOTO:
            return {
                ...state,
                profilePhoto: action.profilePhoto
            }
        case SET_USER_FULL_NAME:
            return {
                ...state,
                fullName: action.fullName,
            }
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.userInfo,
            }
        case SET_USER_CONTACTS:
            return {
                ...state,
                userContacts: { ...action.userContacts },
            }
        case CHECK_JOB_STATUS:
            return {
                ...state,
                jobStatus: action.jobStatus,
            }
        case SET_JOB_STATUS_DESCRIPTION:
            return {
                ...state,
                jobStatusDescription: action.jobStatusDescription,
            }
        default:
            return state
    }
}
export default profilePageReducer;