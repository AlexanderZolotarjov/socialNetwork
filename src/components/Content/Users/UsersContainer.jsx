import Users from './Users';
import {connect} from 'react-redux';
import { addNewPeopleActionCreator, followUnfollowActionCreator } from './../../../redux/people-reducer'

let mapStateToProps = (state) => {
    return {
        peopledata: state.PeoplePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addnewpeople: () => {
            dispatch(addNewPeopleActionCreator())
        },
        followunfollow: (id) => {
            dispatch(followUnfollowActionCreator(id))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;