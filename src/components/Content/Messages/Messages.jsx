import s from './Messages.module.css';
import Contacts from './Contacts/Contacts';
import Chats from './Chats/Chats';

const Messages = (props) => {
    return(
        <div className={s.messages}>
            <div className={s.messages__contacts}>
                <Contacts contactsdata={props.contactsdata} />
            </div>
            <div className={s.messages__chats}>
                <Chats dialogsdata={props.dialogsdata} contactsdata={props.contactsdata} dispatch={props.dispatch} />
            </div>
        </div>
    )
}

export default Messages;