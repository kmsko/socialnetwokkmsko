import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect} from '../../hoc/HocAuthRedirect';
import { chatMessageCreator, refreshChatMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
    return {
        listDialogs: state.dialogsPage.listDialogs,
        messageWrite: state.dialogsPage.messageWrite,
        message: state.dialogsPage.message,
        messageWrite: state.dialogsPage.messageWrite,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(chatMessageCreator()),
        readTextChange: (message_text) => dispatch(refreshChatMessageCreator(message_text))
    }
}



export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)