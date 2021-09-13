import s from './User.module.css';
import React from 'react';
import userPhoto from '../../../../assets/images/user.jpeg'

const User = (props) => {
    return(
        <div className={s.users__item}>
            <div className={s.users__photo}>
                <img src={props.photo ? props.photo : userPhoto} alt="personalPhoto" />
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