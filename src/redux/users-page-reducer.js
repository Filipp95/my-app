const FOLLOW  = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';  
const SET_USERS = 'SET_USERS';


export const followAC = (userID) => { return ({ type: FOLLOW, userID }) } 
export const unFollowAC = (userID) => { return ({ type: UNFOLLOW, userID }) }
export const setUsersAC = (users) => { return ({type: SET_USERS, users})}

let initialState = {
    users: [
        { id: 1, followed: false, fullName: 'Natasha', location: { city: 'Moscow', country: 'Russia' }, status: 'We will meet!', ava: './woman.png' },
        { id: 2, followed: true, fullName: 'Alexey', location: { city: 'Astana', country: 'Kazakhstan' }, status: 'Juve is the best', ava: './man.png' },
        { id: 3, followed: false, fullName: 'Misha', location: { city: 'Moscow', country: 'Russia' }, status: 'I like Real Madrid', ava: './boy.png' },
        { id: 4, followed: true, fullName: 'Fabrizio', location: { city: 'Palermo', country: 'Italy' }, status: 'Who cares?', ava: './man.png' },
    ],
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, 
                users: state.users.map( user => {
                    if (user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    else return user
                }) 
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                ...state.users,
                users: state.users.map( user => {
                    if (user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    else return user
                }) 
            }
        } 
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}



export default usersPageReducer;