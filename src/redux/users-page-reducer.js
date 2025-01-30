import { userAPI } from "../api/api";

const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROCESS = 'TOGGLE_FOLLOWING_PROCESS';

export const followSuccess = (userID) => { return ({ type: FOLLOW_SUCCESS, userID }) };
export const unFollowSuccess = (userID) => { return ({ type: UNFOLLOW_SUCCESS, userID }) };
export const setUsers = (users) => { return ({ type: SET_USERS, users }) };
export const setCurrentPage = (currentPage) => { return ({ type: SET_CURRENT_PAGE, currentPage }) };
export const setTotalUsersCount = (totalUsersCount) => { return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount } };
export const toggleIsFetching = (isFetching) => { return ({ type: TOGGLE_IS_FETCHING, isFetching }) };
export const toggleFollowingProcess = (isFollowProcessing, userID) => { return ({ type: TOGGLE_FOLLOWING_PROCESS, isFollowProcessing, userID }) };

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const followTC = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProcess(true, userID));
        userAPI.deleteUser(userID).then(data => {
            debugger
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(userID));
            }
            dispatch(toggleFollowingProcess(false, userID));
        })
    }
}

export const unFollowTC = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProcess(true, userID));
        userAPI.postUser(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userID))
            }
            dispatch(toggleFollowingProcess(false, userID));
        })
    }
}



let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowProcessing: [],
    // users: [
    //     { id: 1, followed: false, fullName: 'Natasha', location: { city: 'Moscow', country: 'Russia' }, status: 'We will meet!', ava: './woman.png' },
    //     { id: 2, followed: true, fullName: 'Alexey', location: { city: 'Astana', country: 'Kazakhstan' }, status: 'Juve is the best', ava: './man.png' },
    //     { id: 3, followed: false, fullName: 'Misha', location: { city: 'Moscow', country: 'Russia' }, status: 'I like Real Madrid', ava: './boy.png' },
    //     { id: 4, followed: true, fullName: 'Fabrizio', location: { city: 'Palermo', country: 'Italy' }, status: 'Who cares?', ava: './man.png' },
    // ],
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_SUCCESS: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: true }
                    }
                    else return user
                })
            }
        }
        case UNFOLLOW_SUCCESS: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: false }
                    }
                    else return user
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_FOLLOWING_PROCESS: {
            return {
                ...state,
                isFollowProcessing: action.isFollowProcessing ?
                    [...state.isFollowProcessing, action.id] :
                    state.isFollowProcessing.filter(id => id !== action.id)
            }
        }
        default:
            return state
    }
}

export default usersPageReducer;