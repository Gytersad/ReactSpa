import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {getAuthUserThank} from "../../redux/authReducer";



class HeaderAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getAuthUserThank()
    }

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

const HeaderContainer = connect(mapStateToProps,{getAuthUserThank})(HeaderAPIComponent)

export default HeaderContainer


