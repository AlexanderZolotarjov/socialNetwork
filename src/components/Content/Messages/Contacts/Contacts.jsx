import s from './Contacts.module.css';
import {NavLink} from 'react-router-dom';

const Contacts = (props) => {
    return(
        <div className={s.contacts}>
            <div className={s.contacts__body}>
                <div className={s.contacts__item}>
                    <NavLink className={s.contacts__link} activeClassName={s.active} to="/messages/alexandr">
                        Alexandr
                    </NavLink>
                </div>
                <div className={s.contacts__item}>
                    <NavLink className={s.contacts__link} activeClassName={s.active} to="/messages/lyubov">
                        Lyubov
                    </NavLink>
                </div>
                <div className={s.contacts__item}>
                    <NavLink className={s.contacts__link} activeClassName={s.active} to="/messages/alexey">
                        Alexey
                    </NavLink>
                </div>
                <div className={s.contacts__item}>
                    <NavLink className={s.contacts__link} activeClassName={s.active} to="/messages/dmitrij">
                        Dmitrij
                    </NavLink>
                </div>
                <div className={s.contacts__item}>
                    <NavLink className={s.contacts__link} activeClassName={s.active} to="/messages/nadejda">
                        Nadejda
                    </NavLink>
                </div>
                <div className={s.contacts__item}>
                    <NavLink className={s.contacts__link} activeClassName={s.active} to="/messages/artem">
                        Artem
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Contacts;