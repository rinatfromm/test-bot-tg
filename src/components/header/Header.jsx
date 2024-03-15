import { useTelegram } from '../../hooks/useTelegram';
import Button from '../button/Button';
import styles from './Header.module.css'



const Header = () => {
    const { user, handleClose } = useTelegram()


    return <div className={styles.header}>
        <Button  onClick={handleClose} />
        <span className={styles.username}>{user?.username}</span>
    </div>;
}

export default Header;