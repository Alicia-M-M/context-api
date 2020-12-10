import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export default function UserStuff() {
    const [userName, setUserName, userInfo, setUserInfo, user] = useContext(UserContext)
    return (
        <div>
            <h1>My user name is {user.userName}</h1>
            <p>My id is {userInfo.userId} </p>
            <p> My Middle Name is  {user.middleName}</p>
            <p> My city is  {user.city}</p>
        </div>
    )
}
