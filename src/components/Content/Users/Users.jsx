import User from './User/User';
import s from './Users.module.css';
import React from 'react';

const addPeopleElement = React.createRef();


const Users = (props) => {
    let usersHtml = props.peopledata.map( (user) => {
        let followUnfollowRequest = () => {
            props.followunfollow(user.personID)
        }
        return (
            <User followunfollow={followUnfollowRequest} key={user.personID} id={user.personID} name={user.name} photo={user.photo} followed={user.followed} />
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