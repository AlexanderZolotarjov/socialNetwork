import Messages from './Messages/Messages';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';
import UsersContainer from './Users/UsersContainer';
import Settings from './Settings/Settings';

import s from './Content.module.css';
import { Route } from 'react-router-dom';


const Content = (props) => {
    
    return (
        <article className={s.content}>
            <Route path='/messages' render={ () => <Messages /> } />
            <Route exact path='/' render={ () => <Profile /> } />
            <Route path='/profile' render={ () => <Profile /> } />

            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/users' render={ () => <UsersContainer /> } />
            <Route path='/settings' render={ () => <Settings /> } />
        </article>
    )
}

export default Content;