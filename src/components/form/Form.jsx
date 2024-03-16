import { useCallback, useEffect, useState } from 'react';
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

    const captureCameraPhoto = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            const track = stream.getVideoTracks()[0];
            const imageCapture = new ImageCapture(track);
            const photoBlob = await imageCapture.takePhoto();
            setUserFoto(photoBlob);
            track.stop();
        } catch (error) {
            console.error('Error capturing photo:', error);
        }
    };

    const onSendData = useCallback(() => {
        const data = {
            userAge,
            userName,
            userFoto
        };
        tg.sendData(JSON.stringify(data));
    }, [userAge, userName, userFoto]);

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
            <div className={styles.inputContainer}>
                <label className={styles.label}>Добавить фото:</label>
                <button onClick={captureCameraPhoto} className={styles.cameraButton}>Сделать фото</button>
            </div>
        </div>
    );
};

export default Form;