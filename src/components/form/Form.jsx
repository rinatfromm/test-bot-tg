// components/form/Form.js
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName, setUserAge, setUserPhoto, selectUserName, selectUserAge, selectUserPhoto } from './../../store/slices/formSlice';
import styles from './Form.module.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userAge = useSelector(selectUserAge);
    const userPhoto = useSelector(selectUserPhoto); 
    const { tg } = useTelegram();

    const handleAddName = (e) => {
        dispatch(setUserName(e.target.value));
    };

    const handleAddAge = (e) => {
        dispatch(setUserAge(e.target.value));
    };

    const handleAddPhoto = (e) => {
        if (e.target.files.length > 0) {
            
            const reader = new FileReader();
            reader.onload = function () {
                dispatch(setUserPhoto(reader.result));
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const onSendData = useCallback(() => {
        const data = {
            userAge,
            userName,
            userPhoto
        };
        tg.sendData(JSON.stringify(data));
    }, [userAge, userName]);

  
    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        };
    }, [onSendData]);

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send'
        });
    }, [tg]);

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
                <input type="text" id="name" value={userName} onChange={handleAddName} className={styles.input} required />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.label}>Возраст:</label>
                <input type="number" id="age" value={userAge} onChange={handleAddAge} className={styles.input} required />
            </div>
        </div>
    );
};

export default Form;






