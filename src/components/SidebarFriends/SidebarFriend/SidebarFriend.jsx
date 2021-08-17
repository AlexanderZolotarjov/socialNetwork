import s from './SidebarFriend.module.css';
import {NavLink} from "react-router-dom";



const SidebarFriend = (props) => {
    return (
        <li className={s.sidebarFriend__item}>
            <NavLink className={s.sidebarFriend__link} to="/profile/">
                <div className={s.sidebarFriend__image}>
                    <img src={props.photo}></img>
                </div>
                <div className={s.sidebarFriend__name}>
                    {props.name}
                </div>
            </NavLink>
        </li>
    )
}

export default SidebarFriend;
