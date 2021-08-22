import s from './NewChat.module.css';
import React from 'react';

let NewChat = (props) => {
    let newChatElement = React.createRef();
    
    let onChatChange = () => {
        props.dispatch({
            type: 'CHANGE-AREA-CHAT',
            value: newChatElement.current.value,
        })
    };
    let addChat = () => {
        props.dispatch({type: 'ADD-CHAT'})
    };
    return (
        <div className={s.newchat}>
            <div className={s.newchat__input}>
                <textarea onChange={ onChatChange } ref={newChatElement} value={props.dialogsdata.newChatText.text} ></textarea>
            </div>
            <div className={s.newchat__button}>
                <button onClick={ addChat }>send</button>
            </div>
        </div>
    )
}


export default NewChat;
