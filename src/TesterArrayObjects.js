import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export default function AnotherComponent() {
    const [userName, setUserName, userInfo, setUserInfo, user, userB] = useContext(UserContext)
    return (
        <div>
            <h1>My user name is {userB.userName}</h1>
            <p>My id is {user.userId} </p>
            <p> My Middle Name is  {userB.middleName}</p>
            <p> My city is  {user.city}</p>
        </div>
    )
}