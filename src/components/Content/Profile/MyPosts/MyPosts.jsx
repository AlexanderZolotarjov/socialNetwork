import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let PostsElements = props.postsdata.map((post) => {
        return (
            <Post key={post.id} likescount={post.likesCount} message={post.message} />
        )
    }) // Массив элементов разметки, созданный на основе массива данных для постов

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addpost();
        props.changearea('');
    }

    let onPostChange = () => {
        let value = newPostElement.current.value;
        props.changearea(value)
    }

    return (
        <div className={`${s.content__posts} ${s.posts}`}>
            <div className={s.posts__title}>Posts</div>
            <div className={s.posts__new}>
                <textarea onChange={ onPostChange } ref={newPostElement} placeholder="Please enter your message!" value={props.newposttext.text}></textarea>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={s.posts__body}>
                {PostsElements}
            </div>
        </div>
    )
}

export default MyPosts;