import s from './Users.module.css';
import React from 'react';
import * as axios from 'axios';
import userPhoto from '../../../assets/images/user.jpeg'

const addPeopleElement = React.createRef();

class Users extends React.Component {

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/users?page=${this.props.currentPage}&quantity=${this.props.pageSize}`)
            .then(response => {
                this.props.setusers(response.data.data)
                this.props.setTotalPeopleCount(response.data.quantityUsers)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://127.0.0.1:8000/users?page=${pageNumber}&quantity=${this.props.pageSize}`)
        .then(response => {

            this.props.setusers(response.data.data)
        })
    }

    render () {
        console.log(this.props.totalPeopleCount)
        let pageCount = Math.ceil(this.props.totalPeopleCount / this.props.pageSize);

        let currentPage = this.props.currentPage;
        let pages = [];
        for(let i = 1; i <= pageCount; i++) {
            pages.push(i)
        };

        return(
            <div className={s.users}>
                <div className={s.users__body}> 
                    {   
                        this.props.peopledata.map((user) => {
                            return (
                                <div className={s.users__item} key={user.personID}>
                                    <div className={s.users__photo}>
                                        <img src={user.photo ? user.photo : userPhoto} alt="personalPhoto" />
                                    </div>
                                    <div className={s.users__id}>
                                        id <span>{user.personID}</span>
                                    </div>
                                    <div className={s.users__name}>{user.name}</div>
                                    {
                                        user.followed ? <button onClick={() => {
                                            this.props.followunfollow(user.personID)
                                        }} className={`${s.users__button} ${s.users__button_red}`}>unfollow</button> : <button onClick={() => {
                                            this.props.followunfollow(user.personID)
                                        }} className={s.users__button}>follow</button>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className={s.users__more}>
                    <div ref={ addPeopleElement } onClick={this.props.addnewpeople} className={s.users__moreButton}>
                        show more
                    </div>
                </div>
                <div className={s.users__pagenumber}>
                    <div className={s.users__bodypagenumber}>
                        {
                            pages.map((page) => {
                                if (page === currentPage) {
                                    return (
                                        <span key={page} onClick={ () => {this.onPageChanged(page)} } className={`${s.user__pagenumber} ${s.user__pagenumber_active}`} href='http://localhost:3000/users'> {page} </span>
                                    )
                                } else {
                                    return (
                                        <span key={page} onClick={ () => {this.onPageChanged(page)} } className={s.user__pagenumber} href='http://localhost:3000/users'> {page} </span>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Users;