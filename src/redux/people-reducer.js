const ADD_NEW_PEOPLE = 'ADD_NEW_PEOPLE';
const FOLLOW_UNFOLLOW = 'FOLLOW_UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PEOPLE_COUNT = 'SET_TOTAL_PEOPLE_COUNT';

let initialState = {
    PeopleData: [],
    pageSize: 5,
    totalPeopleCount: 0,
    currentPage: 1
}

const peopleReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS:
            return {
                ...state, PeopleData: [...action.PeopleData]
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
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_PEOPLE_COUNT:
            return {
                ...state, totalPeopleCount: action.totalPeopleCount
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

export const setCurrentPageActionCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}; // Создаём actions for

export const setTotalPeopleCountActionCreator = (totalPeopleCount) => {
    return {
        type: SET_TOTAL_PEOPLE_COUNT,
        totalPeopleCount
    }
}; // Создаём actions for

export default peopleReducer;