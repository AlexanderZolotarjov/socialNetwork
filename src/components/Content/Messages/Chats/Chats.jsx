import s from './Chats.module.css'

const Chats = (props) => {
    return(
        <div className={s.chats}>
            <div className={s.chats__body}>
                <div className={s.chats__item}>
                    Hi!
                </div>
                <div className={s.chats__item}>
                    How is your It-Kamasutra?
                </div>
                <div className={s.chats__item}>
                    Yo!
                </div>
            </div>
        </div>
    )
}

export default Chats;