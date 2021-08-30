import s from './NewChat.module.css';
import React from 'react';

let NewChat = (props) => {
    let newChatElement = React.createRef();
    
    let callChatChange = () => {
        props.onchatchange(newChatElement.current.value)
    };
    let callAddChat = () => {
        props.addchat()
    };
    return (
        <div className={s.newchat}>
            <div className={s.newchat__input}>
                <textarea onChange={ callChatChange } ref={newChatElement} value={props.dialogsdata.newChatText} ></textarea>
            </div>
            <div className={s.newchat__button}>
                <button onClick={ callAddChat }>send</button>
            </div>
        </div>
    )
}


export default NewChat;
