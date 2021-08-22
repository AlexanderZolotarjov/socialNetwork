import Messages from './Messages/Messages';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';

import s from './Content.module.css';
import { Route } from 'react-router-dom';

const Content = (props) => {
    
    return (
        <article className={s.content}>
            <Route path='/messages' render={ () => <Messages contactsdata={props.state.ContactsData} dialogsdata={props.state.DialogsPage} dispatch={props.dispatch} /> } />
            <Route exact path='/' render={ () => <Profile contactsdata={props.state.ContactsData} profiledata={props.state.ProfilePage} dispatch={props.dispatch} /> } />
            <Route path='/profile' render={ () => <Profile contactsdata={props.state.ContactsData} profiledata={props.state.ProfilePage} dispatch={props.dispatch} /> } />

            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
        </article>
    )
}

export default Content;