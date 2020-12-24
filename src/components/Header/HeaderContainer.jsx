import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {getAuthUserThunk} from "../../redux/authReducer";



class HeaderAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getAuthUserThunk()
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

const HeaderContainer = connect(mapStateToProps,{getAuthUserThunk})(HeaderAPIComponent)

export default HeaderContainer


