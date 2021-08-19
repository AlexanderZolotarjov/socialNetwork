import Info from './Info/Info';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <Info />
            <MyPosts newposttext={props.profiledata.newPostText} postsdata={props.profiledata.PostsData} addpost={props.addpost} changearea={props.changearea} />
        </div>
    )
}

export default Profile;