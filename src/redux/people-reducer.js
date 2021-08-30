const ADD_NEW_PEOPLE = 'ADD_NEW_PEOPLE';
const FOLLOW_UNFOLLOW = 'FOLLOW_UNFOLLOW';


let newDefaultElements = [];
let quantityDefaultElements = 0;
let iteration = 0;

function getFiveDefautlElements(elements) {
    for (iteration; iteration < 5; iteration++) {
        if (elements[quantityDefaultElements]) {
            newDefaultElements = [...newDefaultElements, elements[quantityDefaultElements]]
            quantityDefaultElements++
        }
        else return newDefaultElements
    }
    return newDefaultElements
}

function getFiveElements(elements) {
    let newElements = [];
    for (let i = 0; i < 5; i++) {
        if (elements[quantityDefaultElements]) {
            newElements = [...newElements, elements[quantityDefaultElements]]
            quantityDefaultElements++
        }
        else return newElements
    }
    return newElements
}


let initialState = {
    PeopleData: [
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
}

// let newState = getFiveDefautlElements(initialState.PeopleData);





const peopleReducer = (state = initialState, action) => {
    let newState = getFiveDefautlElements(state.PeopleData);
    switch(action.type) {
        case ADD_NEW_PEOPLE:
            let addingState = getFiveElements(initialState.PeopleData);
            addingState.forEach(element => newState.push(element))
            return [
                ...newState,
            ]
        case FOLLOW_UNFOLLOW:
            return [
                ...newState,
                newState[action.userId - 1].followed = !newState[action.userId - 1].followed
            ]
        default: return newState
    }
}

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