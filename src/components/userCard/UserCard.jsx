import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserPhoto } from './../../store/slices/formSlice';

const UserCard = () => {
    const userPhoto = useSelector(selectUserPhoto);

    return (
        <div>
            <h3>UserCard</h3>
            {userPhoto && <img src={userPhoto} alt="User" />}
        </div>
    );
}

export default UserCard;