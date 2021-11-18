import React from 'react';
import { useState } from 'react';
import AddButton from './UI/AddButton';
import PopUp from './UI/PopUp'
import './NewUser.css';
const NewUser = (props) => {
    const [enteredUser, setName] = useState('');
    const [enteredAge, setAge] = useState('');
    const [enteredCountry, setCountry] = useState('');

    const [booleanUser, setBooleanUser] = useState(true);
    const [booleanAge, setBooleanAge] = useState(true);
    const [booleanCountry, setBooleanCountry] = useState(true);

    const [popUpBooleanUser, setPopUpBooleanUser] = useState(false);
    const [popUpBooleanAge, setPopUpBooleanAge] = useState(false);
    const [popUpBooleanCountry, setPopUpBooleanCountry] = useState(false);

    const [popUpBooleanRender, setPopUpBooleanRender] = useState(false)


    const userRegEx = /(^[A-ZÁÉÍÓÚ][a-záéíóú]{1,15}$)/;
    const ageRegEx = /^(([1][89])|([2-9][0-9]))|([1][01][0-9])$/;
    const countryRegEx = /(^[A-ZÁÉÍÓÚ]{1,3}[a-záéíóú]{1,10}$)|(^[A-ZÁÉÍÓÚ][a-záéíóú]{1,20}\s[A-ZÁÉÍÓÚa-záéíóú]{1,20}\s([A-ZÁÉÍÓÚa-záéíóú][a-záéíóú]{1,15}\s)?[A-ZÁÉÍÓÚ][a-záéíóú]{1,10}$)/;

    const changeName = (event) => {
        setName(event.target[0].value);
        !userRegEx.test(event.target[0].value) ? setBooleanUser(false) : setBooleanUser(true);
        console.log(event.target[0].value);

    }

    const changeAge = (event) => {

        setAge(event.target[1].value);

        !ageRegEx.test(event.target[1].value) ? setBooleanAge(false) : setBooleanAge(true);
        console.log(event.target[1].value);
    }

    const changeCountry = (event) => {

        setCountry(event.target[2].value);
        !countryRegEx.test(event.target[2].value) ? setBooleanCountry(false) : setBooleanCountry(true);
        console.log(event.target[2].value);

    }

    const submitHandler = (event) => {

        event.preventDefault();

        // EL PROBLEMA ESTÁ EN ESTA LÓGICA DE LOS BOOLEAN. TENDRÍA QUE HACER QUE SE PUSIERAN ROJOS AL HACER SUBMIT ÚNICAMENTE: EN LOS ONCHANGE SE VAN CAMBIANDO EN DIRECTO LOS BOOLEAN. NO DEBERÍA SER ASÍ. TODA LA LÓGICA DE LAS FUNCIONES DE ARRIBA, COMO LA DE LA REGEX, DEBERÍA APLICARSE AL HACER SUBMIT. TODAS ESAS CONDICIONES DEBERÍAN CHECKEARSE EN EL SUBMIT, Y AHI GENERARSE UNA VARIABLE QUE COMO PROP LE INDICASE A POP UP QUE DEBE RENDERIZARSE. 

        // if (!event.target[0].value) {
        //     setBooleanUser(false)
        // } else {
        //     setBooleanUser(true)
        // }

        // if (!event.target[1].value) {
        //     setBooleanAge(false)
        // } else {
        //     setBooleanAge(true)
        // }

        // if (!event.target[2].value) {
        //     setBooleanCountry(false)
        // } else {
        //     setBooleanCountry(true)
        // }
        changeName(event);
        changeAge(event);
        changeCountry(event);



        // console.log(props);
        if (userRegEx.test(event.target[0].value) === true && ageRegEx.test(event.target[1].value) === true && countryRegEx.test(event.target[2].value) === true) {

            const userObj = {
                id: 'e' + Math.random().toString() * 10,
                name: event.target[0].value,
                age: event.target[1].value,
                country: event.target[2].value
            };

            props.onCollectNewObject(userObj);

        }

        console.log(event);

        props.onPopUpBoolean(booleanUser, booleanAge, booleanCountry);





    }

    return <div>
        <form onSubmit={submitHandler} className="form">

            <div style={{ color: booleanUser === false ? 'red' : 'black' }} className="form__div">
                <label type="text">Username</label>
                <input style={{ backgroundColor: booleanUser === false ? 'rgb(255, 0, 0, 0.2)' : 'white' }} placeholder="username..."  ></input>
            </div>
            <div style={{ color: booleanAge === false ? 'red' : 'black' }} className="form__div">
                <label type="text">Age (Years)</label>
                <input style={{ backgroundColor: booleanAge === false ? 'rgb(255, 0, 0, 0.2)' : 'white' }} placeholder="age..." maxlength="3"  ></input>
            </div>

            <div style={{ color: booleanCountry === false ? 'red' : 'black' }} className="form__div">
                <label type="text">Country</label>
                <input style={{ backgroundColor: booleanCountry === false ? 'rgb(255, 0, 0, 0.2)' : 'white' }} placeholder="country..." ></input>
            </div>

            <AddButton onToggleUser={booleanUser} onToggleAge={booleanAge} onToggleCountry={booleanCountry} />

        </form>

        {(!booleanUser || !booleanAge || !booleanCountry) ? <PopUp onBooleanUser={booleanUser} onBooleanAge={booleanAge} onBooleanCountry={booleanCountry} /> : null}
    </div>



}









export default NewUser