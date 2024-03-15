import Button from '../button/Button';
import styles from './Header.module.css'



const Header = () => {
    const tg = window.Telegram.WebApp;

    const handleClose = () => {
        tg.close();
    };

    return <div className={styles.header}>
        <Button close={Close} onClick={handleClose}/>
        <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
    </div>;
}

export default Header;