import s from './Messages.module.css';
import Contacts from './Contacts/Contacts';
import Chats from './Chats/Chats';

const Messages = (props) => {
    return(
        <div className={s.messages}>
            <div className={s.messages__contacts}>
                <Contacts />
            </div>
            <div className={s.messages__chats}>
                <Chats />
            </div>
        </div>
    )
}

export default Messages;