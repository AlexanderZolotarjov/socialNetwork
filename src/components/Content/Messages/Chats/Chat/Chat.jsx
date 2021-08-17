import s from './Chat.module.css'

const Chat = (props) => {
    const authorID = 1;//айди автора с которым мы сравниваем текущий айди
    if (props.authorID == authorID) {
        return (
            <div className={`${s.chat} ${s.chat_person}`}>
                <div className={s.chat__body}>
                    <div className={s.chat__image}>
                        <img src={props.photo} alt="chat" />
                    </div>
                    <div className={s.chat__message}>
                        {props.message}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={`${s.chat} ${s.chat_friend}`}>
                <div className={s.chat__body}>
                    <div className={s.chat__image}>
                        <img src={props.photo} alt="chat" />
                    </div>
                    <div className={s.chat__message}>
                        {props.message}
                    </div>
                </div>
            </div>
        )
    }
} 
//Если айди автора совпадает с заданным айди то просто выдаем разметку,
//если не совпадает то выдаем разметку с классом _друг


export default Chat;