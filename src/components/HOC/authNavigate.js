import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const authRedirect = (Component) => {
    const AuthRedirectComponent = (props) => {
        if (props.isAuth === false) return <Navigate to='/login' />
        return <Component {...props} />
    }
    let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect) (AuthRedirectComponent)
      
    return ConnectedAuthRedirectComponent;
}


