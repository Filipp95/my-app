import React, { useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { setAuthUserData, setUserAuthProfilePhoto } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";


const HeaderContainer = (props) => {
    useEffect(() => {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                props.setAuthUserData(id, email, login) 
            }
        })
    },
        []
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



export default connect(mapStateToProps, { setAuthUserData, setUserAuthProfilePhoto })(HeaderContainer);