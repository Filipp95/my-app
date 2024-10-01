const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROCESS = 'TOGGLE_FOLLOWING_PROCESS';

export const follow = (userID) => { return ({ type: FOLLOW, userID }) };
export const unFollow = (userID) => { return ({ type: UNFOLLOW, userID }) };
export const setUsers = (users) => { return ({ type: SET_USERS, users }) };
export const setCurrentPage = (currentPage) => { return ({ type: SET_CURRENT_PAGE, currentPage }) };
export const setTotalUsersCount = (totalUsersCount) => { return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount } };
export const toggleIsFetching = (isFetching) => { return ({ type: TOGGLE_IS_FETCHING, isFetching }) };
export const toggleFollowingProcess = (isFollowProcessing, userID) => { return ({ type: TOGGLE_FOLLOWING_PROCESS, isFollowProcessing, userID}) };

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowProcessing: [],
    // users: [
    //     { id: 1, followed: false, fullName: 'Natasha', location: { city: 'Moscow', country: 'Russia' }, status: 'We will meet!', ava: './natasha.png' },
    //     { id: 2, followed: true, fullName: 'Alexey', location: { city: 'Astana', country: 'Kazakhstan' }, status: 'Juve is the best', ava: './man.png' },
    //     { id: 3, followed: false, fullName: 'Misha', location: { city: 'Moscow', country: 'Russia' }, status: 'I like Real Madrid', ava: './boy.png' },
    //     { id: 4, followed: true, fullName: 'Fabrizio', location: { city: 'Palermo', country: 'Italy' }, status: 'Who cares?', ava: './man.png' },
    // ],
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
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
        case UNFOLLOW: {
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
                isFollowProcessing: action.isFollowProcessing?
                [...state.isFollowProcessing, action.id]:
                state.isFollowProcessing.filter(id => id !==action.id)
            }
        }
        default:
return state
    }
}

export default usersPageReducer;