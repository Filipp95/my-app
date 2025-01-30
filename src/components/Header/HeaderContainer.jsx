import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAuthThunkCreator } from "../../redux/auth-reducer";
import Header from "./Header";


const HeaderContainer = (props) => {
    useEffect(()=>{
        props.getAuthThunkCreator()
    },[]
);
    return (
        <Header {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.userID,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        authProfilePhoto: state.auth.authProfilePhoto,
    }
}



export default connect(mapStateToProps, { getAuthThunkCreator})(HeaderContainer);