import s from './Chats.module.css';
import Chat from './Chat/Chat';
import NewChat from './NewChat/NewChat';
import React from 'react';

let chatsBodyElement = React.createRef();




const Chats = (props) => {

    let chatsScroll = () => {
        let chatScrollHeight = chatsBodyElement.current.scrollHeight;
        if (chatScrollHeight >= 0) {
            chatsBodyElement.current.scrollTop = chatScrollHeight;
        }
    }
    setTimeout(chatsScroll, 10)
    let ChatsElements = props.dialogsdata.ChatsData.
        map( chat => {
            return (
                <Chat key={chat.id} message={chat.message} authorID={chat.personID} photo={props.contactsdata[chat.personID - 1].photo} />
            )
        })//новый массив, уже с разметкой по друзьям
    
    return(
        <div className={s.chats}>
            <div ref={ chatsBodyElement } className={s.chats__body}>
                {ChatsElements}
            </div>
            <div className={s.chats__newchat}>
                <NewChat dialogsdata={props.dialogsdata} dispatch={props.dispatch} />
            </div>
        </div>
    )
} //Возвоащаем разметку чата

export default Chats;