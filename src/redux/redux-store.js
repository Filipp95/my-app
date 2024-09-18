import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dialogsPageReducer from "./dialogs-page-reducer";
import profilePageReducer from "./profile-page-reducer";
import sideBarReducer from "./side-bar-reducer";
import usersPageReducer from "./users-page-reducer";

let reducers = combineReducers ({
    profilePage: profilePageReducer,
    dialogPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    sideBar: sideBarReducer,
});

let store = configureStore({reducer : reducers});

export default store;