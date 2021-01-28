import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {logoutThunk} from "../../redux/authReducer";



class HeaderAPIComponent extends React.Component {

    render() {
        return<>
            <Header {...this.props}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const HeaderContainer = connect(mapStateToProps,{logoutThunk})(HeaderAPIComponent)

export default HeaderContainer


