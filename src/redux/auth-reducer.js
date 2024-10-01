const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_USER_AUTH_PROFILE_PHOTO = 'SET_USER_AUTH_PROFILE_PHOTO';

export const setAuthUserData = (userID, email, login) => { return ({ type: SET_AUTH_USER_DATA, data: {userID, email, login} }) };
export const setUserAuthProfilePhoto = (authProfilePhoto) => { return ({ type: SET_USER_AUTH_PROFILE_PHOTO, authProfilePhoto }) }

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    authProfilePhoto: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
        case SET_USER_AUTH_PROFILE_PHOTO: {
            return {
                ...state,
                authProfilePhoto: action.authProfilePhoto,
            }
        }
        default:
            return state
    }
}

export default authReducer;