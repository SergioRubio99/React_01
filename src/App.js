import React from 'react';
import NewUser from './components/NewUser'
import UsersList from './components/UsersList.js'
import './App.css'
const userList = [


  {
    id: 'e1',
    name: 'Max',
    age: 32,
    country: 'The Netherlands'
  },
  {
    id: 'e2',
    name: 'Robert',
    age: 21,
    country: 'The UK'
  },
  {
    id: 'e3',
    name: 'Haalan',
    age: 18,
    country: 'Sweden'
  }
]


function App() {
  return (
    <div>
      <NewUser />
      <UsersList />
    </div>
  );
}

export default App;
