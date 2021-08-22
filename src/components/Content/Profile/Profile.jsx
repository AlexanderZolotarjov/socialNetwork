import Info from './Info/Info';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import React from 'react';

let profileElement = React.createRef()

const Profile = (props) => {
    return (
        <div ref={ profileElement } className={s.profile}>
            <Info />
            <MyPosts profiledata={props.profiledata} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;