import s from './NewChat.module.css';

let NewChat = (props) => {
    return (
        <div className={s.newchat}>
            <div className={s.newchat__input}>
                <textarea></textarea>
            </div>
            <div className={s.newchat__button}>
                <button>asfdafsd</button>
            </div>
        </div>
    )
}


export default NewChat;
