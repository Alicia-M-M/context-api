import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';


import { UserContext, user, userB, multipleUsers } from './UserContext';
import UserStuff from './UserStuff';
import AnotherComponent from './AnotherComponent'
import Multiple from './Multiple';
import Main from './Main'


function App() {
  const [userName, setUserName] = useState('');
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {

    setUserName('sally34');
    setUserInfo({
      favColor: 'orange',
      userId: 12564
    })
  }, [])

  return (
    <UserContext.Provider value={[userName, setUserName, userInfo, setUserInfo, user, userB, multipleUsers]}>
      <div className="App">
        <h1>In The App Component</h1>
        <Main />
        <Multiple />
        {/* <UserStuff />
        <AnotherComponent />
        <Multiple /> */}
      </div>
    </UserContext.Provider>
  );
}

export default App;
