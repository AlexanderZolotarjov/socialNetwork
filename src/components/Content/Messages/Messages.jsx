import s from './Messages.module.css';
import Contacts from './Contacts/Contacts';
import Chats from './Chats/Chats';

const Messages = (props) => {
    return(
        <div className={s.messages}>
            <div className={s.messages__contacts}>
                <Contacts contactsdata={props.dialogsdata.ContactsData} />
            </div>
            <div className={s.messages__chats}>
                <Chats chatsdata={props.dialogsdata.ChatsData} contactsdata={props.dialogsdata.ContactsData} />
            </div>
        </div>
    )
}

export default Messages;