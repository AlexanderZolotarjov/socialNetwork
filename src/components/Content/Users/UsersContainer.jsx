import React from 'react';
import {connect} from 'react-redux';
import { 
    addNewPeople, 
    followUnfollow, 
    setUsers, 
    setCurrentPage, 
    setTotalPeopleCount, 
    toggleFetching 
} from './../../../redux/people-reducer'
import * as axios from 'axios';
import userPhoto from '../../../assets/images/user.jpeg';
import Users from './Users';
import loader from '../../../assets/images/loading.gif';
import Loader from '../../Common/Loader/Loader';


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`http://127.0.0.1:8000/users?page=${this.props.currentPage}&quantity=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.data.data)
                this.props.setTotalPeopleCount(response.data.quantityUsers)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleFetching(true)
        axios.get(`http://127.0.0.1:8000/users?page=${pageNumber}&quantity=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleFetching(false)
            this.props.setUsers(response.data.data)
        })
    }

    render () {
        return( 
            <>
                <Loader
                    isFetching={this.props.isFetching}
                    loader={loader}
                />
                <Users 
                    totalPeopleCount={this.props.totalPeopleCount} 
                    pageSize={this.props.pageSize} 
                    currentPage={this.props.currentPage} 
                    peopledata={this.props.peopledata} 
                    userPhoto={userPhoto} 
                    addNewPeople={this.props.addNewPeople} 
                    onPageChanged={this.onPageChanged} 
                    followUnfollow={this.props.followUnfollow}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        peopledata: state.PeoplePage.PeopleData,
        pageSize: state.PeoplePage.pageSize,
        totalPeopleCount: state.PeoplePage.totalPeopleCount,
        currentPage: state.PeoplePage.currentPage,
        isFetching: state.PeoplePage.isFetching
    }
}

const UsersContainer = connect(mapStateToProps, {
    addNewPeople,
    followUnfollow,
    setUsers,
    setCurrentPage,
    setTotalPeopleCount,
    toggleFetching,
} )(UsersAPIComponent)

export default UsersContainer;