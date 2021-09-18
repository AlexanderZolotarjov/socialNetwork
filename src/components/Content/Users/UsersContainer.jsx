import Users from './Users';
import {connect} from 'react-redux';
import { addNewPeopleActionCreator, followUnfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalPeopleCountActionCreator } from './../../../redux/people-reducer'

let mapStateToProps = (state) => {
    return {
        peopledata: state.PeoplePage.PeopleData,
        pageSize: state.PeoplePage.pageSize,
        totalPeopleCount: state.PeoplePage.totalPeopleCount,
        currentPage: state.PeoplePage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addnewpeople: () => {
            dispatch(addNewPeopleActionCreator())
        },
        followunfollow: (id) => {
            dispatch(followUnfollowActionCreator(id))
        },
        setusers: (PeopleData) => {
            dispatch(setUsersActionCreator(PeopleData))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalPeopleCount: (totalPeopleCount) => {
            dispatch(setTotalPeopleCountActionCreator(totalPeopleCount))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;