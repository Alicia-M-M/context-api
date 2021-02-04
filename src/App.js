import { useState, useEffect } from 'react';

// import logo from './logo.svg';
import './App.css';

//1:import in the userContext
import { UserContext, user, userB, multipleUsers } from './UserContext';
import UserStuff from './UserStuff';
// import AnotherComponent from './AnotherComponent'
import Multiple from './Multiple';
import Main from './Main'


function App() {
  //3:decide if I want to create state variables(useState/state) for the data I want to pass.
  //do I want to use props(when using props that implies that you are going to be using the component as a child component in another component.In the parent componenet holding the child compoenent which contains the props you can pass in the state variables from the parent component.) or state(can only be accesible normally in the compoent that creates) variables?

  const [userName, setUserName] = useState('');
  const [userInfo, setUserInfo] = useState({});

  const [post, setPost] = useState([]);
  const [users, setUsers] = useState([]);

  setPost()

  
  setUsers()

 
  //will run eveytime there is a change to the state variable - lifetime of a component. Once the UI loads it will run the use effect. - good way to pass none static data - for example from an api.You can use multiple user effects in a component.No need to re-name- use the same name - similar to calling the function console.log
  useEffect(() => {

    //4:assigned values to the above state variables
    setUserName('sally34');
    setUserInfo({
      favColor: 'orange',
      userId: 12564
    })
  }, [])

  return (
    // 2: create UserContext provider - can add values later in neccesary
    //5:add the state variables to the usercontext.provider
    <UserContext.Provider value={[userName, setUserName, userInfo, setUserInfo, users, setUsers, post, setPost, user, userB, multipleUsers]}>
      <div className="App">
        <h1>In The App Component</h1>
        {/* //the below are child components */}
        <UserStuff color='blue' />
        <Main />
        <Multiple />
        {/* <AnotherComponent /> */}
      </div>
    </UserContext.Provider>
  );
}

export default App;
