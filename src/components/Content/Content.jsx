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
            <Route path='/messages' render={ () => <Messages dialogsdata={props.state.DialogsPage} addchat={props.addchat} changeareachat={props.changeareachat} /> } />
            <Route exact path='/' render={ () => <Profile profiledata={props.state.ProfilePage} addpost={props.addpost} changeareapost={props.changeareapost} /> } />
            <Route path='/profile' render={ () => <Profile profiledata={props.state.ProfilePage} addpost={props.addpost} changeareapost={props.changeareapost} /> } />

            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
        </article>
    )
}

export default Content;