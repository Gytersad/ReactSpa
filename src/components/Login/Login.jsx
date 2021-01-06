import React from "react";
import {Field, reduxForm} from "redux-form";


const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'email'} placeholder={'Login'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder={'Password'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>
                remember me
            </div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


export default Login
