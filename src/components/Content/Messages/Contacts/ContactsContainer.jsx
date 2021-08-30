import Contacts from './Contacts';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        contactsdata: state.ContactsData,
    }
}
let mapDispatchToProps = (state) => {
    return {

    }
}

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts)

export default ContactsContainer;