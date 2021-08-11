import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__image}>
                <img src="https://kipmu.ru/wp-content/uploads/pchmnmr-2048x1415.jpg"></img>
            </div>
        </header>
    )
}

export default Header;