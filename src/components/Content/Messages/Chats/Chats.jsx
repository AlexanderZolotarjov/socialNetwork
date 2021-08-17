import s from './Chats.module.css';
import Chat from './Chat/Chat';
import NewChat from './NewChat/NewChat';



const Chats = (props) => {
    let ChatsElements = props.chatsdata.
        map( chat => {
            return (
                <Chat message={chat.message} authorID={chat.personID} photo={props.contactsdata[chat.personID - 1].photo} />
            )
        })//новый массив, уже с разметкой по друзьям

    return(
        <div className={s.chats}>
            <div className={s.chats__body}>
                {ChatsElements}
            </div>
            <div className={s.chats__newchat}>
                <NewChat />
            </div>
        </div>
    )
} //Возвоащаем разметку чата

export default Chats;