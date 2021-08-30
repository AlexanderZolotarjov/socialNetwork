import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.post__image}>
                <img alt="personalPhoto" src="https://hdwallsbox.com/wallpapers/m/4/cats-animals-yellow-eyes-m3124.jpg"></img>
            </div>
            <div className={s.post__body}>
                <div className={s.post__text}>{ props.message }</div>
                <div className={s.post__likes}>
                    <div className={s.post__sublikes}>
                        <div className={s.post__button}>
                            <a href="https://www.google.com/">like</a>
                        </div>
                        <div className={s.post__quantity}>
                            <div className={s.post__quantityitem}>
                                { props.likescount }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;