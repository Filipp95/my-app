import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_USER_AUTH_PROFILE_PHOTO = 'SET_USER_AUTH_PROFILE_PHOTO';
const SET_USER_LOGIN_DATA = 'SET_USER_LOGIN_DATA';

export const setAuthUserData = (userID, email, login) => { return ({ type: SET_AUTH_USER_DATA, data: {userID, email, login} }) };
export const setUserAuthProfilePhoto = (authProfilePhoto) => { return ({ type: SET_USER_AUTH_PROFILE_PHOTO, authProfilePhoto }) };
export const setUserLoginData = (email, password, rememberMe, captcha) => { return ({ type: SET_USER_LOGIN_DATA, data: {email, password, rememberMe, captcha} })};

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    authProfilePhoto: null,
    password: null,
    rememberMe: false,
    captcha: false,
}

export const getAuthThunkCreator = () => {
    return (dispatch) => {
        authAPI.getMe().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}

export const postUserLoginTC = (formData) => {
    return (dispatch) => {
        authAPI.postLogin(formData).then(data => {
            if (data.resultCode === 0) {
                let {email, password, rememberMe, captcha} = formData;
                dispatch(setUserLoginData(email, password, rememberMe, captcha));
            }
        })
    }
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
        case SET_USER_LOGIN_DATA: {
            return {
                ...state,
                ...action.state,
            }
        }
        default:
            return state
    }
}

export default authReducer;