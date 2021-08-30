const ON_POST_CHANGE = 'ON_POST_CHANGE';
const ADD_POST = 'ADD-POST';

let initialState = {
    PostsData: [
        {id: 1, message: "У лукоморья дуб зелёный, Златая цепь на дубе том. И днём и ночью кот учёный всё ходит по цепи кругом.", likesCount: 11},
        {id: 2, message: "Идёт направо — песнь заводит, налево — сказку говорит. Там чудеса: там леший бродит. Русалка на ветвях сидит", likesCount: 28},
        {id: 3, message: "Там на неведомых дорожках - следы невиданных зверей, избушка там на курьих ножках стоит без окон, без дверей", likesCount: 14},
    ],  // Массив данных для постов
    newPostText: '',  // Строка для нового поста
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ON_POST_CHANGE:
            return {
                ...state,
                newPostText: action.value
            }
        case ADD_POST:
            let quantityPosts = Object.keys(state.PostsData).length;
            let newPost = {
                id: quantityPosts + 1,
                message: state.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                PostsData: [...state.PostsData, newPost],
                newPostText: ''
            }
        default: return state;
    }
}

export const onPostChangeActionCreator = (text) => {
    return {
        type: ON_POST_CHANGE,
        value: text
    }
}; // Создаем action для
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}; // Создаем action для addPost


export default profileReducer;