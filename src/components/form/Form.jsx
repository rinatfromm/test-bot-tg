import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userFoto, setUserFoto] = useState(null);
    const { tg } = useTelegram();

    const handleAddName = (e) => {
        setUserName(e.target.value);
    };

    const handleAddAge = (e) => {
        setUserAge(e.target.value);
    };

    const handleAddFoto = (e) => {
        if (e.target.files.length > 0) {
            setUserFoto(e.target.files[0]);
        }
    };

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send'
        });
    }, []);

    useEffect(() => {
        if (!userAge || !userName) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [userAge, userName]);

    return (
        <div className={styles.form}>
            <h3>Введите ваши данные</h3>
            <div className={styles.inputContainer}>
                <label className={styles.label}>Имя:</label>
                <input type="text" id="name" value={userName} onChange={handleAddName} className={styles.input} />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.label}>Возраст:</label>
                <input type="number" id="age" value={userAge} onChange={handleAddAge} className={styles.input} />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.label}>Добавить фото:</label>
                <input type="file" id="photo" onChange={handleAddFoto} accept="image/*" className={styles.input} />
            </div>
        </div>
    );
};

export default Form;