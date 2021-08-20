import s from './Chats.module.css';
import Chat from './Chat/Chat';
import NewChat from './NewChat/NewChat';
import React from 'react';



const Chats = (props) => {
    let ChatsElements = props.dialogsdata.ChatsData.
        map( chat => {
            return (
                <Chat key={chat.id} message={chat.message} authorID={chat.personID} photo={props.contactsdata[chat.personID - 1].photo} />
            )
        })//новый массив, уже с разметкой по друзьям
    
    return(
        <div className={s.chats}>
            <div className={s.chats__body}>
                {ChatsElements}
            </div>
            <div className={s.chats__newchat}>
                <NewChat dialogsdata={props.dialogsdata} addchat={props.addchat} changeareachat={props.changeareachat} />
            </div>
        </div>
    )
} //Возвоащаем разметку чата

export default Chats;