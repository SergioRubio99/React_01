import React from 'react';
import { useState } from 'react';
import NewUser from './components/NewUser';
import UsersList from './components/UsersList';
import './App.css';
import PopUp from './components/UI/PopUp';
import { User } from './entities/User';
import { useTranslation, } from "react-i18next";

const userList = [
  {
    id: 'e' + Math.random().toString() * 10,
    name: 'Max',
    age: 32,
    country: 'Netherlands', 
  },
  {
    id: 'e' + Math.random().toString() * 10,
    name: 'Robert',
    age: 21,
    country: 'United Kingdom',
  },
  {
    id: 'e' + Math.random().toString() * 10,
    name: 'Haalan',
    age: 18,
    country: 'Sweden',
  },
];

function App() {
  const { t } = useTranslation();

  const [showPopup, setShowPopup] = useState(false);
  const [messages, setMessages] = useState("");
  const [list, refreshedList] = useState(userList);
  const deleteUserHandler = userId => {
    refreshedList(prevUsers => {
      return prevUsers.filter(user => user.id !== userId);
    });
  };

  const collectNewObject = (user) => {
    refreshedList([user, ...list])
  };

  const onError = (error) => {
    const messages = User.getErrorKeys(error.errors)
      .map(key => t(key));

    setMessages(messages);
    setShowPopup(!error.isValid);
  };

  return (
    <div className="App">
      <NewUser onCollectNewObject={collectNewObject} onError={onError} className="NewUser"/>
      <UsersList onRefreshedList={list} onDeleteUserHandler={deleteUserHandler} className="UsersList" />
      {(showPopup) ? <PopUp messages={messages} />: null}
    </div>
  );
};

export default App;

