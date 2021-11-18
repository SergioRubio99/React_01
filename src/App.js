import React from 'react';
import { useState } from 'react';
import NewUser from './components/NewUser'
import UsersList from './components/UsersList'
import PopUp from './components/UI/PopUp'
import './App.css'



const userList = [


  {
    id: 'e' + Math.random().toString() * 10,
    name: 'Max',
    age: 32,
    country: 'Netherlands'
  },
  {
    id: 'e' + Math.random().toString() * 10,
    name: 'Robert',
    age: 21,
    country: 'United Kingdom'
  },
  {
    id: 'e' + Math.random().toString() * 10,
    name: 'Haalan',
    age: 18,
    country: 'Sweden'
  }
]
function App() {
  const [booleanPickUp, setBooleanPickUp] = useState([true, true, true]);

  const [list, refreshedList] = useState(userList);
  // console.log(list)


  const deleteUserHandler = userId => {
    refreshedList(prevUsers => {
      return prevUsers.filter(user => user.id !== userId);
    });
  };

  const collectNewObject = (user) => {

    console.log(user)
    console.log(list)
    refreshedList([user, ...list])
    console.log(list)
  }

  const popUpBoolean = (booleanUser, booleanAge, booleanCountry) => {

    setBooleanPickUp([booleanUser, booleanAge, booleanCountry]);
    console.log('popUpBoolean -->' + booleanPickUp );

}

  return (
    <div className="App">
      <NewUser onCollectNewObject={collectNewObject} onPopUpBoolean={popUpBoolean} className="NewUser"/>
      <UsersList onRefreshedList={list} onDeleteUserHandler={deleteUserHandler} className="UsersList" />
   
    </div>
  );
}

export default App;
