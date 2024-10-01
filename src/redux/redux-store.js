import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dialogsPageReducer from "./dialogs-page-reducer";
import profilePageReducer from "./profile-page-reducer";
import sideBarReducer from "./side-bar-reducer";
import usersPageReducer from "./users-page-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers ({
    profilePage: profilePageReducer,
    dialogPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    sideBar: sideBarReducer,
    auth: authReducer,
});

let store = configureStore({reducer : reducers});

window.store = store;

export default store;