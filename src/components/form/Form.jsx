import { useCallback, useEffect, useState } from 'react';
import styles from './Form.module.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const { tg } = useTelegram();

    const handleAddName = (e) => {
        setUserName(e.target.value);
    };

    const handleAddAge = (e) => {
        setUserAge(e.target.value);
    };

    const sendFormData = () => {
        const data = {
            userAge,
            userName
        };
        tg.sendData(JSON.stringify(data));
    };

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send',
            onClick: sendFormData
        });
    }, [tg, userName, userAge]);

    useEffect(() => {
        if (!userAge || !userName) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [tg, userName, userAge]);

    return (
        <div className={styles.form}>
            <h3>Введите ваши данные</h3>
            <div className={styles.inputContainer}>
                <label className={styles.label}>Имя:</label>
                <input type="text" value={userName} onChange={handleAddName} className={styles.input} required />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.label}>Возраст:</label>
                <input type="number" value={userAge} onChange={handleAddAge} className={styles.input} required />
            </div>
        </div>
    );
};

export default Form;