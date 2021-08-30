import { addPostActionCreator, onPostChangeActionCreator } from '../../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        profilepage: state.ProfilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onpostchange: (value) => dispatch(onPostChangeActionCreator(value)),
        addpost: () => dispatch(addPostActionCreator()),
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;