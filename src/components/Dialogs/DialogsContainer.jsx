import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth
    }
}


const DialogsContainer = connect(mapStateToProps,
    {updateNewMessageBodyCreator, sendMessageCreator})
    (Dialogs);


export default DialogsContainer
