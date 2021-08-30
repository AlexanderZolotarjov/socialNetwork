const ON_CHAT_CHANGE = 'ON_CHAT_CHANGE';
const ADD_CHAT = 'ADD-CHAT';

let initialState = {
    ChatsData: [
        {id: 1, personID: 1, message: "Небо было желтым, как латунь; его еще не закоптило дымом. За крышами фабрики оно светилось особенно сильно. Вот-вот должно было взойти солнце."},
        {id: 2, personID: 2, message: "Я посмотрел на часы — еще не было восьми. Я пришел на четверть часа раньше обычного."},
        {id: 3, personID: 1, message: "Я открыл ворота и подготовил насос бензиновой колонки. Всегда в это время уже подъезжали заправляться первые машины."},
        {id: 4, personID: 2, message: "Вдруг за своей спиной я услышал хриплое кряхтение, — казалось, будто под землей проворачивают ржавый винт. Я остановился и прислушался."},
        {id: 5, personID: 1, message: "Потом пошел через двор обратно в мастерскую и осторожно приоткрыл дверь."},
        {id: 6, personID: 2, message: "В полутемном помещении, спотыкаясь, бродило привидение. Оно было в грязном белом платке, синем переднике, в толстых мягких туфлях и размахивало метлой; весило оно не менее девяноста килограммов; это была наша уборщица Матильда Штосс."},
        {id: 7, personID: 1, message: "Некоторое время я наблюдал за ней. С грацией бегемота сновала она взад и вперед между автомобильными радиаторами и глухим голосом напевала песню о верном гусаре."},
        {id: 8, personID: 2, message: "На столе у окна стояли две бутылки коньяка. В одной уже почти ничего не оставалось. Накануне вечером она была полна."},
    ],  // Массив данных чатов
    newChatText: '',

    
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ON_CHAT_CHANGE:
            return {
                ...state,
                newChatText: action.value
            }
        case ADD_CHAT:
            let quantityChats = state.ChatsData.length;
            let newChat = {
                id: quantityChats + 1,
                personID: 1,
                message: state.newChatText
            }
            return {
                ...state,
                ChatsData: [...state.ChatsData, newChat],
                newChatText: ''
            }
        default: return state;
    }
}

export const onChatChangeActionCreator = (value) => {
    return {
        type: ON_CHAT_CHANGE,
        value: value
    }
}; // Создаём actions for onChatChange
export const addChatActionCreator = () => {
    return {
        type: ADD_CHAT
    }
}; // Создаём actions for addChat

export default dialogsReducer;