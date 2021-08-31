import Users from './Users';
import {connect} from 'react-redux';
import { addNewPeopleActionCreator, followUnfollowActionCreator, setUsersActionCreator } from './../../../redux/people-reducer'

let mapStateToProps = (state) => {
    return {
        peopledata: state.PeoplePage.PeopleData
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
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;