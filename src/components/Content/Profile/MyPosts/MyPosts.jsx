import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {
    let PostsData = [
        {id: 1, message: "Hi, how are you?", likesCount: 11},
        {id: 2, message: "We will be happy!", likesCount: 28},
        {id: 3, message: "Hi, I'm fine, and you?", likesCount: 14},
    ] // Массив данных для постов
    
    let PostsElements = PostsData.map((post) => {
        return (
            <Post likesCount={post.likesCount} message={post.message} />
        )
    }) // Массив элементов разметки, созданный на основе массива данных для постов
    
    return (
        <div className={`${s.content__posts} ${s.posts}`}>
            <div className={s.posts__title}>Posts</div>
            <div className={s.posts__new}>
                <textarea placeholder="Please enter your message!"></textarea>
                <button>Send post</button>
            </div>
            <div className={s.posts__body}>
                {PostsElements}
            </div>
        </div>
    )
}

export default MyPosts;