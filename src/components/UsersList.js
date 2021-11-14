import React from 'react';
import './UsersList.css';
import UserItem from './UserItem'

const UsersList = (props) => {
    console.log(props.onRefreshedList)
  
    return <ul className="UsersList">
        
        {props.onRefreshedList.map((user) => (
            
            <UserItem
                key={user.id}
                name={user.name}
                age={user.age}
                country={user.country}
            />
        ))}

    </ul>


};


export default UsersList;