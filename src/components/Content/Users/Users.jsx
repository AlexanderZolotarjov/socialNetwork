import User from './User/User';
import s from './Users.module.css';
import React from 'react';
import * as axios from 'axios';

const addPeopleElement = React.createRef();

const Users = (props) => {
    let getUsers = () => {
        if (props.peopledata.length === 0) {
            axios.get('http://127.0.0.1:8000/users')
                .then(response => {
                    props.setusers(response.data)
                })
        }
    }
    getUsers();

    let usersHtml = props.peopledata.map( (user) => {
        let followUnfollowRequest = () => {
            props.followunfollow(user.personID)
        }
        return (
            <User key={user.personID} followunfollow={followUnfollowRequest} id={user.personID} name={user.name} photo={user.photo} followed={user.followed} />
        )
    })
    return(
        <div className={s.users}>
            <div className={s.users__body   }>
                {usersHtml}
            </div>
            <div className={s.users__more}>
                <div ref={ addPeopleElement } onClick={props.addnewpeople} className={s.users__moreButton}>
                    show more
                </div>
            </div>
        </div>
    )
}

export default Users;