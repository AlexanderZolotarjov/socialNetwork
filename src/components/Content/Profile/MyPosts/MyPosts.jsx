import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let PostsElements = props.profilepage.PostsData.map((post) => {
        return (
            <Post key={post.id} likescount={post.likesCount} message={post.message} />
        )
    }) // Массив элементов разметки, созданный на основе массива данных для постов

    let newPostElement = React.createRef();
    let callPostChange = () => props.onpostchange(newPostElement.current.value)
    let callAddPost = () => props.addpost();

    return (
        <div className={`${s.content__posts} ${s.posts}`}>
            <div className={s.posts__title}>Posts</div>
            <div className={s.posts__new}>
                <textarea onChange={ callPostChange } ref={newPostElement} placeholder="Please enter your message!" value={props.profilepage.newPostText}></textarea>
                <button onClick={ callAddPost }>Add post</button>
            </div>
            <div className={s.posts__body}>
                {PostsElements}
            </div>
        </div>
    )
}

export default MyPosts;