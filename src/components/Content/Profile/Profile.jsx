import Info from './Info/Info';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = (props) => {

    return (
        <div className={s.profile}>
            <Info />
            <MyPosts postsdata={props.profiledata.PostsData}/>
        </div>
    )
}

export default Profile;