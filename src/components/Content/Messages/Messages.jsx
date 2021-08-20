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
                <Chats dialogsdata={props.dialogsdata} contactsdata={props.dialogsdata.ContactsData} addchat={props.addchat} changeareachat={props.changeareachat} />
            </div>
        </div>
    )
}

export default Messages;