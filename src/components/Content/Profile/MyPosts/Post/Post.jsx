import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.post__image}>
                <img src="https://liveinternet.club/uploads/posts/2020-02/thumbs/1582247486_06.jpg"></img>
            </div>
            <div className={s.post__body}>
                <div className={s.post__text}>{ props.message }</div>
                <div className={s.post__likes}>
                    <div className={s.post__button}>
                        <a href="#">like</a>
                    </div>
                    <div className={s.post__quantity}>{ props.likescount }</div>
                </div>
            </div>
        </div>
    )
}

export default Post;