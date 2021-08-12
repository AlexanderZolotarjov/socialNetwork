import s from './Chats.module.css'

const Chats = (props) => {
    const authorID = 1;//айди автора с которым мы сравниваем текущий айди

    const Chat = (props) => {
        if (props.authorID == authorID) {
            return (
                <div className={s.chats__item}>
                    {props.message}
                </div>
            )
        } else {
            return (
                <div className={`${s.chats__item} ${s.chats__item_friend}`}>
                    {props.message}
                </div>
            )
        }
    } 
    //Если айди автора совпадает с заданным айди то просто выдаем разметку,
    //если не совпадает то выдаем разметку с классом _друг

    let ChatsData = [
        {id: 1, authorID: 1, message: "Hi! My name is Alexandr. I live in town Mospino. I learn Java Sctipt and React. I realy want to be a programmist."},
        {id: 2, authorID: 2, message: "Hello! Alexandr, it's really interesting. Thank you for this story!"},
        {id: 3, authorID: 1, message: "Yo!"},
        {id: 4, authorID: 2, message: "Yo!"},
    ] //массив данных по друзьям

    let ChatsElements = ChatsData.
        map( chat =>  <Chat message={chat.message} authorID={chat.authorID} />)
        //новый массив, уже с разметкой по друзьям

    return(
        <div className={s.chats}>
            <div className={s.chats__body}>
                {ChatsElements}
            </div>
        </div>
    )
} //Возвоащаем разметку чата

export default Chats;