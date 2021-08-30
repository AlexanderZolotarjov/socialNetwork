import Info from './Info/Info';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import React from 'react';

let profileElement = React.createRef()

const Profile = (props) => {
    return (
        <div ref={ profileElement } className={s.profile}>
            <Info />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;