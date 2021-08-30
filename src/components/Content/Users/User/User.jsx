import s from './User.module.css';
import React from 'react';

const User = (props) => {
    return(
        <div className={s.users__item}>
            <div className={s.users__photo}>
                <img src={props.photo} alt="personalPhoto" />
            </div>
            <div className={s.users__id}>
                id <span>{props.id}</span>
            </div>
            <div className={s.users__name}>{props.name}</div>
            {
                props.followed ? <div onClick={props.followunfollow} className={`${s.users__button} ${s.users__button_red}`}>unfollow</div> : <div onClick={props.followunfollow} className={s.users__button}>follow</div>
            }
        </div>
    )
}

export default User;