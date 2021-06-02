import React from 'react';
import DialogItems from './Dialog/DialogItem';
import s from "./Dialogs.module.css"
import Message from './Message/Message';



const Dialogs = (props) => {

    return (
        <div className={s.wrapper}>
            <DialogItems
                listDialogs={props.listDialogs} />
            <Message
                messageWrite={props.messageWrite}
                addMessage={props.addMessage}
                readTextChange={props.readTextChange}
                message={props.message} />
        </div>
    )
}

export default Dialogs;