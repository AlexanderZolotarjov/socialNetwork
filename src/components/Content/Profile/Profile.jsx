import Info from './Info/Info';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import React from 'react';

let profileElement = React.createRef()

const Profile = (props) => {
    return (
        <div ref={ profileElement } className={s.profile}>
            <Info />
            <MyPosts newposttext={props.profiledata.newPostText} postsdata={props.profiledata.PostsData} addpost={props.addpost} changeareapost={props.changeareapost} />
        </div>
    )
}

export default Profile;