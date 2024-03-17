import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserPhoto } from '../../store/slices/formSlice';
import styles from './UserCard.module.css';

const UserCard = () => {
  const userPhoto = useSelector(selectUserPhoto);

  return (
    <div className={styles.container}>
      <h2>User Card</h2>
      <div className={styles.photoContainer}>
        {userPhoto && <img src={userPhoto} alt="User" className={styles.photo} />}
      </div>
      {/* Добавьте другие детали пользователя, если нужно */}
    </div>
  );
}

export default UserCard;