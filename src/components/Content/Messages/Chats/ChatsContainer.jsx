import Chats from './Chats';
import { addChatActionCreator, onChatChangeActionCreator } from '../../../../redux/dialogs-reducer';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        contactsdata: state.ContactsData,
        dialogsdata: state.DialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onchatchange: (value) => {
            dispatch(onChatChangeActionCreator(value))
        },
        addchat: () => {
            dispatch(addChatActionCreator())
        },
    }
}

const ChatsContainer = connect(mapStateToProps, mapDispatchToProps)(Chats)

export default ChatsContainer;