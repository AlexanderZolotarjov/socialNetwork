const ADD_NEW_PEOPLE = 'ADD_NEW_PEOPLE';
const FOLLOW_UNFOLLOW = 'FOLLOW_UNFOLLOW';
const SET_USERS = 'SET_USERS';

// let newDefaultElements = [];
// let quantityDefaultElements = 0;
// let iteration = 0;

// function getFiveDefautlElements(elements) {
//     for (iteration; iteration < 5; iteration++) {
//         if (elements[quantityDefaultElements]) {
//             newDefaultElements = [...newDefaultElements, elements[quantityDefaultElements]]
//             quantityDefaultElements++
//         }
//         else return newDefaultElements
//     }
//     return newDefaultElements
// }

// function getFiveElements(elements) {
//     let newElements = [];
//     for (let i = 0; i < 5; i++) {
//         if (elements[quantityDefaultElements]) {
//             newElements = [...newElements, elements[quantityDefaultElements]]
//             quantityDefaultElements++
//         }
//         else return newElements
//     }
//     return newElements
// }


let initialState = {
    PeopleData: []
}

const peopleReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS:
            return {
                ...state, PeopleData: [...state.PeopleData, action.PeopleData][0]
            }
        case ADD_NEW_PEOPLE:
            return {

            }
        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                PeopoleData: [...state.PeopleData],
                PeopleData: state.PeopleData.map( user => {
                    if (user.personID === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user
                })
            }
        default: return state
    }
}

export const setUsersActionCreator = (PeopleData) => {
    return {
        type: SET_USERS,
        PeopleData
    }
}; // Создаём actions for followUnfollow 

export const addNewPeopleActionCreator = () => {
    return {
        type: ADD_NEW_PEOPLE
    }
}; // Создаём actions for addNewPeople

export const followUnfollowActionCreator = (userId) => {
    return {
        type: FOLLOW_UNFOLLOW,
        userId
    }
}; // Создаём actions for followUnfollow 

export default peopleReducer;