import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let PostsElements = props.postsdata.map((post) => {
        return (
            <Post likescount={post.likesCount} message={post.message} />
        )
    }) // Массив элементов разметки, созданный на основе массива данных для постов

    let newPostElement = React.createRef();
    
    let addPost = () => {
        let text = newPostElement.current.value;
        alert (text);
    }

    return (
        <div className={`${s.content__posts} ${s.posts}`}>
            <div className={s.posts__title}>Posts</div>
            <div className={s.posts__new}>
                <textarea ref={newPostElement} placeholder="Please enter your message!"></textarea>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={s.posts__body}>
                {PostsElements}
            </div>
        </div>
    )
}

export default MyPosts;