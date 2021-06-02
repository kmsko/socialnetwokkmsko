import React from 'react';
import s from "./Message.module.css"
const Message = (props) => {

    let rendertextMessage = props.message.map(text => <div className={s.message} key={text.id}> {text.text} </div>);
    let onAddMessage = () => {
        if(props.messageWrite === "" ){
            return 
        }
        props.addMessage();
    }
    let onReadTextChange = (leeter) => {
        let message_text = leeter.target.value;
      if(message_text === " " || message_text === `\n`){
          return 
      }
        props.readTextChange(message_text);

    }
    return (
        <div className={s.wrapper}>
            <div >
                <textarea
                    onChange={onReadTextChange}
                    className={s.in_text}
                    value={props.messageWrite}>
                </textarea>
                <div>
                    <button
                        onClick={onAddMessage}
                        className={s.push_text}>
                        SEND</button>
                </div>
            </div>

            <div>{rendertextMessage}</div>
        </div>
    )
}
export default Message;