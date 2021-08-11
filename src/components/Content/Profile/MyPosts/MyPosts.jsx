import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={`${s.content__posts} ${s.posts}`}>
            <div className={s.posts__title}>Posts</div>
            <div className={s.posts__new}>
                <textarea placeholder="Please enter your message!"></textarea>
                <button>Send post</button>
            </div>
            <div className={s.posts__body}>
                <Post likesCount="23" message="Hi, how are you?" />
                <Post likesCount="43" message="Hi, I'm fine, and you?" />
            </div>
        </div>
    )
}

export default MyPosts;