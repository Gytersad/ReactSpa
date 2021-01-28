import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {

    class AuthRedirectComponent extends React.Component {
        render(){
            if (!this.props.isAuth){return <Redirect to={'/login'}/>}
            return <Component {...this.props}/>
        }
    }
    let mapStateToPropsForRedirect = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect)(AuthRedirectComponent)

    return ConnectedAuthRedirectComponent
}
