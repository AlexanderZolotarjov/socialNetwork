import { combineReducers, createStore } from "redux";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import contactsReducer from './contacts-reducer';
import peopleReducer from './people-reducer';



let redusers = combineReducers({
    DialogsPage: dialogsReducer,
    ProfilePage: profileReducer,
    ContactsData: contactsReducer,
    PeoplePage: peopleReducer,
});

let store = createStore(redusers);

export default store;