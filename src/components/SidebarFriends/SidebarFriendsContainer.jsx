
import SidebarFriends from './SidebarFriends';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        contactsdata: state.ContactsData
    }
}

let mapDispatchToProps = () => {
    return {
        
    }
}

const SidebarFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(SidebarFriends)

export default SidebarFriendsContainer;
