import User from './User/User';
import s from './Users.module.css';
import React from 'react';

const addPeopleElement = React.createRef();

const Users = (props) => {
    if (props.peopledata.length === 0) {
        props.setusers(
            [        
                {personID: 1, name: "Ioan", photo: "https://th.wallhaven.cc/lg/ne/nejzko.jpg", followed: "false"},
                {personID: 2, name: "Innokentij", photo: "https://avatanplus.com/files/resources/mid/58e3d1ab15b3715b39eb0451.jpg", followed: "false"},
                {personID: 3, name: "Alexey", photo: "https://i.pinimg.com/474x/5d/cf/94/5dcf9403075f272f72f730ac2fb21f80--castors-baby-beaver.jpg", followed: "false"},
                {personID: 4, name: "Dmitrij", photo: "https://cdn.eslgaming.com/play/eslgfx/gfx/logos/teams/16284000/16284099_medium.jpg", followed: "false"},
                {personID: 5, name: "Nadejda", photo: "https://pbs.twimg.com/media/Bbsvs8zCUAAv9af.jpg", followed: "false"},
                {personID: 6, name: "Artem", photo: "https://i.pinimg.com/236x/af/75/16/af75167cb5780e728211698de477e790.jpg?nii=t", followed: "false"},
                {personID: 7, name: "Ioan", photo: "https://th.wallhaven.cc/lg/ne/nejzko.jpg", followed: "false"},
                {personID: 8, name: "Innokentij", photo: "https://avatanplus.com/files/resources/mid/58e3d1ab15b3715b39eb0451.jpg", followed: "false"},
                {personID: 9, name: "Alexey", photo: "https://i.pinimg.com/474x/5d/cf/94/5dcf9403075f272f72f730ac2fb21f80--castors-baby-beaver.jpg", followed: "false"},
                {personID: 10, name: "Dmitrij", photo: "https://cdn.eslgaming.com/play/eslgfx/gfx/logos/teams/16284000/16284099_medium.jpg", followed: "false"},
                {personID: 11, name: "Nadejda", photo: "https://pbs.twimg.com/media/Bbsvs8zCUAAv9af.jpg", followed: "false"},
                {personID: 12, name: "Artem", photo: "https://i.pinimg.com/236x/af/75/16/af75167cb5780e728211698de477e790.jpg?nii=t", followed: "false"},
            ]
        )
    }

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