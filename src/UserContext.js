import { createContext } from 'react';

export const user = {
    userId: 1234,
    userName: 'Cindy',
    city: "New York",
    middleName: 'Kate'
}

export const userB = {
    userId: 6849,
    userName: 'Mary',
    city: "London",
    middleName: 'Sarah'
}

export const multipleUsers = [
    {
        userId: 1111,
        userName: 'Tim',
        city: "Denver",
        middleName: 'Bob'
    },
    {
        userId: 2222,
        userName: 'Steve',
        city: "LA",
        middleName: 'Ben'
    },
    {
        userId: 3333,
        userName: 'Sam',
        city: "Colorado",
        middleName: 'Rob'
    },
]





export const UserContext = createContext(user, userB, multipleUsers)