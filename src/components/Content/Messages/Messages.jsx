import s from './Messages.module.css';
import ContactsContainer from './Contacts/ContactsContainer';
import ChatsContainer from './Chats/ChatsContainer';

const Messages = (props) => {
    return(
        <div className={s.messages}>
            <div className={s.messages__contacts}>
                <ContactsContainer />
            </div>
            <div className={s.messages__chats}>
                <ChatsContainer />
            </div>
        </div>
    )
}

export default Messages;