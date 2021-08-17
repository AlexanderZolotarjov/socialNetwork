import s from './SidebarFriends.module.css';
import SidebarFriend from './SidebarFriend/SidebarFriend';

const SidebarFriends = (props) => {
    let SidebarData =  props.contactsdata.map( (contact) => {
        return (
            <SidebarFriend name={contact.name} photo={contact.photo} />
        )
    })
    return (
        <sidebar className={s.sidebarFriends}>
            <ul className={s.sidebarFriends__list}>
                {SidebarData}
            </ul>
        </sidebar>
    )
}

export default SidebarFriends;
