import s from './Contact.module.css';
import {NavLink} from 'react-router-dom';

const Contact = (props) => {
    // debugger;
    let path = "/messages/" + props.personid;
    return (
        <div className={s.contact}>
            <NavLink className={s.contact__link} activeClassName={s.active} to={path}>
                <div className={s.contact__image}>
                    <img src={props.photo} alt="contact" />
                </div>
                {props.name}
            </NavLink>
        </div>
    )
} // Функция возвращающая нам отдельный элемент контактов



export default Contact;