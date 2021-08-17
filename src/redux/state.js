let ContactsData = [
    {personID: 1, name: "Alexandr", photo: "https://th.wallhaven.cc/lg/ne/nejzko.jpg",},
    {personID: 2, name: "Lyubov", photo: "https://avatanplus.com/files/resources/mid/58e3d1ab15b3715b39eb0451.jpg", },
    {personID: 3, name: "Alexey", photo: "https://i.pinimg.com/474x/5d/cf/94/5dcf9403075f272f72f730ac2fb21f80--castors-baby-beaver.jpg",},
    {personID: 4, name: "Dmitrij", photo: "https://cdn.eslgaming.com/play/eslgfx/gfx/logos/teams/16284000/16284099_medium.jpg",},
    {personID: 5, name: "Nadejda", photo: "https://pbs.twimg.com/media/Bbsvs8zCUAAv9af.jpg",},
    {personID: 6, name: "Artem", photo: "https://i.pinimg.com/236x/af/75/16/af75167cb5780e728211698de477e790.jpg?nii=t",},
]  // Массив данных контактов

let SidebarPage = {
    ContactsData: ContactsData,
}

let ProfilePage = {
    ContactsData: ContactsData,
    PostsData: [
        {id: 1, message: "Hi, how are you?", likesCount: 11},
        {id: 2, message: "We will be happy!", likesCount: 28},
        {id: 3, message: "Hi, I'm fine, and you?", likesCount: 14},
    ],  // Массив данных для постов
}  // Масств данных для профайла

let DialogsPage = {
    ContactsData: ContactsData,
    ChatsData: [
        {id: 1, personID: 1, message: "Hi! My name is Alexandr. I live in town Mospino. I learn Java Sctipt and React. I realy want to be a programmist."},
        {id: 2, personID: 2, message: "Hello! Alexandr, it's really interesting. Thank you for this story!"},
        {id: 3, personID: 1, message: "Yo!"},
        {id: 4, personID: 2, message: "Yo!"},
        {id: 5, personID: 1, message: "Yo!"},
        {id: 6, personID: 2, message: "Yo!"},
        {id: 7, personID: 1, message: "Yo!"},
        {id: 8, personID: 2, message: "Yo!"},
    ],  // Массив данных чатов
}  // Массив данных для диалогов

let State = {
    SidebarPage: SidebarPage,
    ProfilePage: ProfilePage,
    DialogsPage: DialogsPage,
} //собираем всё в один объект

export default State;