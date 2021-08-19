import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <ul className={s.sidebar__list}>
                <li className={s.sidebar__item}>
                    <NavLink className={s.sidebar__link} activeClassName={s.active} to="/profile">Profile</NavLink>
                </li>
                <li className={s.sidebar__item}>
                    <NavLink className={s.sidebar__link} activeClassName={s.active} to="/messages">Messages</NavLink>
                </li>
                <li className={s.sidebar__item}>
                    <NavLink className={s.sidebar__link} activeClassName={s.active} to="/news">News</NavLink>
                </li>
                <li className={s.sidebar__item}>
                    <NavLink className={s.sidebar__link} activeClassName={s.active} to="/music">Music</NavLink>
                </li>
                <li className={`${s.sidebar__item} ${s.sidebar__item_mode}`}>
                    <NavLink  className={s.sidebar__link} activeClassName={s.active} to="/settings">Settings</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
