import Info from './Info/Info';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.profile}>
            <Info />
            <MyPosts />
        </div>
    )
}

export default Profile;