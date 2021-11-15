import React from 'react';
import { useState } from 'react';
import NewUser from './components/NewUser'
import UsersList from './components/UsersList.js'
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

  const [list, refreshedList] = useState(userList);
// console.log(list)

  
const deleteUserHandler = userId => {
  refreshedList(prevUsers => {
    const updatedUsers = prevUsers.filter(user => user.id !== userId);
    return updatedUsers;
  });
};
  
  const collectNewObject = (user) => {

    console.log(user)
    console.log(list)
    refreshedList([user, ...list])
    console.log(list)
  }


  return (
    <div>
      <NewUser onCollectNewObject={collectNewObject} />
      <UsersList onRefreshedList={list} onDeleteUserHandler={deleteUserHandler}/>
    </div>
  );
}

export default App;
