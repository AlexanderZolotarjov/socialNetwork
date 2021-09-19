import s from './Users.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pageCount = Math.ceil(props.totalPeopleCount / props.pageSize);
    let currentPage = props.currentPage;
    let pages = [];
    for(let i = 1; i <= pageCount; i++) {
        pages.push(i)
    };

    return (
        <div className={s.users}>
            <div className={s.users__body}> 
                {   
                    props.peopledata.map((user) => {
                        return (
                            <div className={s.users__item} key={user.personID}>
                                <div className={s.users__photo}>
                                    <NavLink to={`/profile/${user.personID}`}>
                                        <img src={user.photo ? user.photo : props.userPhoto} alt="personalPhoto" />
                                    </NavLink>
                                </div>
                                <div className={s.users__id}>
                                    id <span>{user.personID}</span>
                                </div>
                                <div className={s.users__name}>{user.name}</div>
                                {
                                    user.followed ? <button onClick={() => {
                                        props.followUnfollow(user.personID)
                                    }} className={`${s.users__button} ${s.users__button_red}`}>unfollow</button> : <button onClick={() => {
                                        props.followUnfollow(user.personID)
                                    }} className={s.users__button}>follow</button>
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className={s.users__more}>
                <div onClick={props.addNewPeople} className={s.users__moreButton}>
                    show more
                </div>
            </div>
            <div className={s.users__pagenumber}>
                <div className={s.users__bodypagenumber}>
                    {
                        pages.map((page) => {
                            if (page === currentPage) {
                                return (
                                    <span key={page} onClick={ () => {props.onPageChanged(page)} } className={`${s.user__pagenumber} ${s.user__pagenumber_active}`} href='http://localhost:3000/users'> {page} </span>
                                )
                            } else {
                                return (
                                    <span key={page} onClick={ () => {props.onPageChanged(page)} } className={s.user__pagenumber} href='http://localhost:3000/users'> {page} </span>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Users;