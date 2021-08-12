import s from './Contacts.module.css';
import {NavLink} from 'react-router-dom';

const Contacts = (props) => {
    const ContactItem = (props) => {
        let path = "/messages/" + props.id;
        return (
            <div className={s.contacts__item}>
                <NavLink className={s.contacts__link} activeClassName={s.active} to={path}>
                    {props.name}
                </NavLink>
            </div>
        )
    } // Функция возвращающая нам отдельный элемент контактов
    
    let ContactsData = [
        {id: 1, name: "Alexandr"},
        {id: 2, name: "Lyubov"},
        {id: 3, name: "Alexey"},
        {id: 4, name: "Dmitrij"},
        {id: 5, name: "Nadejda"},
        {id: 6, name: "Artem"},
    ]; // Массив данных контактов
    
    let ContactsElements = ContactsData.
        map(contact => <ContactItem name={contact.name} id={contact.id} />);
        //массив разметки контактов сформированный на основе массива контактов
        
    return(
        <div className={s.contacts}>
            <div className={s.contacts__body}>
                {ContactsElements}
            </div>
        </div>
    )
}



export default Contacts;