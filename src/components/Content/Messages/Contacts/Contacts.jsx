import s from './Contacts.module.css';
import Contact from './Contact/Contact';

const Contacts = (props) => {
    let ContactsElements = props.contactsdata.map(contact => 
        <Contact key={contact.personID} name={contact.name} personid={contact.personID} photo={contact.photo} />);
        //массив разметки контактов сформированный на основе массива контактов
        
    return(
        <div className={s.contacts}>
            {ContactsElements}
        </div>
    )
}



export default Contacts;