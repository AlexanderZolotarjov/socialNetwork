import s from './Info.module.css';

const Info = () => {
    return (
        <div className={s.info}>
            <div className={s.info__photo}>
                <img src="http://ucan.vn/upload/userfiles/blog/23122015/9-science-backed-reasons-to-own-a-dog.jpg"></img>
            </div>
            <div className={s.info__text}>
                <div className={s.info__name}>Alex Alexeev</div>
                <div className={s.info__points}>
                    <ul className={s.info__list}>
                        <li className={s.info__item}>Date of Birth: 2 january</li>
                        <li className={s.info__item}>City: Minsk</li>
                        <li className={s.info__item}>Education: BSU '11</li>
                        <li className={s.info__item}>Web Site: https://google.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Info;