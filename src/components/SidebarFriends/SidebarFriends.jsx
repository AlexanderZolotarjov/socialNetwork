import s from './SidebarFriends.module.css';
import SidebarFriend from './SidebarFriend/SidebarFriend';

const SidebarFriends = (props) => {
    let SidebarData =  props.contactsdata.map( (contact) => {
        return (
            <SidebarFriend key={contact.personID} name={contact.name} photo={contact.photo} />
        )
    })
    return (
        <div className={s.sidebarFriends}>
            <ul className={s.sidebarFriends__list}>
                {SidebarData}
            </ul>
        </div>
    )
}

export default SidebarFriends;
