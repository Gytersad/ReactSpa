import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import s from './../common/FormsControls/FormsControl.module.css'



const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
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
                <Field component={Input} name={'email'} validate={[required]} placeholder={'Email'}/>
            </div>
            <div>
                <Field component={Input} name={'password'} validate={[required]} placeholder={'Password'}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'}  type={'checkbox'}/>
                remember me
            </div>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginThunk})(Login)
