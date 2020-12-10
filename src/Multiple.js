import React, { useState, useEffect } from 'react'

export default function Multiple() {
    const [post, setPost] = useState([]);
    const [users, setUsers] = useState([]);

    const fectchData = (url1, url2) => {
        let Url1 = url1;
        let Url2 = url2;

        Promise.all([
            fetch(Url1),
            fetch(Url2)
        ]).then(function (responses) {
            // Get a JSON object from each of the responses
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            // data is Array of returned API calls
            console.log(data);
            setPost(data[0]);
            setUsers(data[1]);
        }).catch(function (error) {
            // Log Error
            console.log(error);
        });
    }

    useEffect(() => {
        fectchData('https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/users')

    }, [])

    return (
        <div>
            <h1>Mutilple API Calls</h1>
            {post.map((item) => {
                return (
                    <h3>{item.title}</h3>
                )
            })}
            {users.map((item) => {
                return (
                    <h3>{item.name}</h3>
                )
            })} 
        </div>
    )
}
