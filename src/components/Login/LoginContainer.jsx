import React, { useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { postUserLoginTC } from "../../redux/auth-reducer";
import { connect } from "react-redux";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"e-mail"} name={'email'} component={'input'}/></div>
            <div><Field placeholder={"Password"} name={'password'} component={'input'} visible = {'none'}/></div>
            <div><Field type={"checkbox"} name={'rememberMe'} component={'input'} /> Remember Me</div>
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const LoginFormContainer = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.postUserLoginTC(formData)
    }   
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    email: state.auth.email,
    password: state.auth.password,
    rememberMe: state.auth.rememberMe,
    captcha: state.auth.captcha,
})

export default connect (mapStateToProps, {postUserLoginTC}) (LoginFormContainer)
