import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.posts__item}>
            <div className={s.posts__image}>
                <img src="https://liveinternet.club/uploads/posts/2020-02/thumbs/1582247486_06.jpg"></img>
            </div>
            <div className={s.posts__body}>
                <div className={s.posts__title}>{ props.message }</div>
                <div className={s.posts__likes}>
                    <div className={s.posts__button}>
                        <a href="#">like</a>
                    </div>
                    <div className={s.posts__quantity}>{ props.likesCount }</div>
                </div>
            </div>
        </div>
    )
}

export default Post;