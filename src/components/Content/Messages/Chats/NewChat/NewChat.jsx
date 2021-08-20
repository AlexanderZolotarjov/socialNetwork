import s from './NewChat.module.css';
import React from 'react';

let NewChat = (props) => {
    let newChatElement = React.createRef();
    
    let onChatChange = () => {
        let value = newChatElement.current.value;
        props.changeareachat(value)

    }
    return (
        <div className={s.newchat}>
            <div className={s.newchat__input}>
                <textarea onChange={ onChatChange } ref={newChatElement} value={props.dialogsdata.newChatText} ></textarea>
            </div>
            <div className={s.newchat__button}>
                <button onClick={ props.addchat }>send</button>
            </div>
        </div>
    )
}


export default NewChat;
