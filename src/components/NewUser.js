import React from 'react';
import { useState } from 'react';
import AddButton from './UI/AddButton';
import { useTranslation, } from "react-i18next";
import './NewUser.css';
import { User } from '../entities/User';

const NewUser = (props) => {
    const { t } = useTranslation();

    const [isError, setIsError] = useState(false);
    const [errors, setErrors] = useState([]);

    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");

    const createUser = (event) => {
        event.preventDefault();
        const user = new User(
            username,
            +age,
            country,
        );

        const result = user.validate();

        setIsError(result.isValid);

        if (result.isValid) {
            setUsername("");
            setAge("");
            setCountry("");

            props.onCollectNewObject(user);
            return;
        }
    
        setErrors(result.errors);
        props.onError(result);
    };

    return <div>
        <form onSubmit={createUser} className="form">

            <div style={{ color: (User.errors.username) ? 'red' : 'black' }} className="form__div">
                <label type="text">{t('newUser.username.label')}</label>
                <input style={{ backgroundColor: errors.includes(User.errors.username) ? 'rgb(255, 0, 0, 0.2)' : 'white' }} placeholder={t('newUser.username.placeholder')} value={username} onChange={e => setUsername(e.target.value)} ></input>
            </div>

            <div style={{ color: errors.includes(User.errors.age) ? 'red' : 'black' }} className="form__div">
                <label type="text">{t('newUser.age.label')}</label>
                <input style={{ backgroundColor: errors.includes(User.errors.age) ? 'rgb(255, 0, 0, 0.2)' : 'white' }} placeholder={t('newUser.age.placeholder')} maxLength="{User.maxLength}" value={age} onChange={e => setAge(e.target.value)} ></input>
            </div>

            <div style={{ color: errors.includes(User.errors.country) ? 'red' : 'black' }} className="form__div">
                <label type="text">{t('newUser.country.label')}</label>
                <input style={{ backgroundColor: errors.includes(User.errors.country) ? 'rgb(255, 0, 0, 0.2)' : 'white' }} placeholder={t('newUser.country.placeholder')} value={country} onChange={e => setCountry(e.target.value)} ></input>
            </div>

            <AddButton />
        </form>

    </div>
};

export default NewUser;
