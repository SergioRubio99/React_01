import React from 'react';
import './UsersList.css';
import UserItem from './UserItem'

const UsersList = (props) => {
    console.log(props.onRefreshedList)

    if (props.onRefreshedList.length === 0) {
        return <ul className="UsersList">
            <p>Todo vacío</p>
        </ul>
    }

    return <ul className="UsersList">

        {props.onRefreshedList.map((user) => (

            <UserItem
                id={user.id}
                name={user.name}
                age={user.age}
                country={user.country}
                onDelete={props.onDeleteUserHandler}
            />
        ))}

    </ul>


};


export default UsersList;