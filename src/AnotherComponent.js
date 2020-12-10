import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export default function AnotherComponent() {
    const [userName, setUserName, userInfo, setUserInfo, user, userB, multipleUsers] = useContext(UserContext)

    const multi = multipleUsers.map((person, index) => {
        return (
            <div key={index}>
                <p>{person.userName}</p>
                <p>{person.city}</p>
            </div>
        )
    }
    )
    return (
        <div>
            <h1>My user name is {userB.userName}</h1>
            <p>My id is {user.userId} </p>
            <p> My Middle Name is  {userB.middleName}</p>
            <p> My city is  {user.city}</p>
            {multi}
        </div>
    )
}