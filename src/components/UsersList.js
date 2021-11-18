import React from 'react';
import './UsersList.css';
import UserItem from './UserItem';
import { useTranslation, } from "react-i18next";

const UsersList = (props) => {
    const { t } = useTranslation();
    
    if (props.onRefreshedList.length === 0) {
        return <ul className="UsersList">
            <p>{t('userList.listIsEmpty')}</p>
        </ul>
    }

    return <ul className="UsersList">
        {props.onRefreshedList.map((user) => (
            <UserItem
                id={user.id}
                key={user.id}
                name={user.name}
                age={user.age}
                country={user.country}
                onDelete={props.onDeleteUserHandler}
            />
        ))}
    </ul>
};

export default UsersList;
