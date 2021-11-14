import React from 'react';
import { useState } from 'react';
import AddButton from './UI/AddButton'
import './NewUser.css'

const NewUser = (props) => {
    const [enteredName, setName] = useState('');
    const [enteredAge, setAge] = useState('');
    const [enteredCountry, setCountry] = useState('');

    const [booleanUser, setBooleanUser] = useState(true);
    const [booleanAge, setBooleanAge] = useState(true);
    const [booleanCountry, setBooleanCountry] = useState(true);

    const changeName = (event) => {

        setName(event.target.value)
        event.target.value !== "" ?   setBooleanUser(true) :   setBooleanUser(false)     
    }

    const changeAge = (event) => {
        let ageRegEx = /^([1][89])|([2-9][0-9])$/g

        setAge(event.target.value)
        event.target.value !== "" ?   setBooleanAge(true) :   setBooleanAge(false)
        
        !ageRegEx.test(event.target.value) ? setBooleanAge(false) : setBooleanAge(true)

    }

    const changeCountry = (event) => {

        setCountry(event.target.value)
        event.target.value !== "" ?   setBooleanCountry(true) :   setBooleanCountry(false)     

    }


    const submitHandler = (event) => {

        event.preventDefault();
        console.log(event);

        if (!event.target[0].value ) {
            setBooleanUser(false)
        } else {
            setBooleanUser(true)
        }

        if (!event.target[1].value) {
            setBooleanAge(false)
        } else {
            setBooleanAge(true)
        }

        if (!event.target[2].value) {
            setBooleanCountry(false)
        } else {
            setBooleanCountry(true)
        }

        if(!event.target[0].value || !event.target[1].value || !event.target[2].value === ""){
            
        }else{

            const userObj = {
                id: 'e' + Math.random().toString() * 10,
                name: enteredName,
                age: enteredAge,
                country: enteredCountry
            };
    
            // console.log(props);
            props.onCollectNewObject(userObj)
    
            setName('');
            setAge('');
            setCountry('');
    
            console.log(userObj);
            console.log(event);
        }
    }

    return <form onSubmit={submitHandler} className="form">

        <div style={{ color: booleanUser === false ? 'red' : 'black' }} className="form__div">
            <label type="text">Username</label>
            <input style={{ backgroundColor: booleanUser === false ? 'rgb(255, 0, 0, 0.2)' : 'white' }} onChange={changeName} placeholder="username..." value={enteredName}></input>
        </div>
        <div style={{ color: booleanAge === false ? 'red' : 'black' }} className="form__div">
            <label type="text">Age (Years)</label>
            <input style={{ backgroundColor: booleanAge === false ? 'rgb(255, 0, 0, 0.2)' : 'white' }} onChange={changeAge} placeholder="age..." value={enteredAge}></input>
        </div>

        <div style={{ color: booleanCountry === false ? 'red' : 'black' }} className="form__div">
            <label type="text">Country</label>
            <input style={{ backgroundColor: booleanCountry === false ? 'rgb(255, 0, 0, 0.2)' : 'white' }} onChange={changeCountry} placeholder="country..." value={enteredCountry}></input>
        </div>

        <AddButton onBooleanUser={setBooleanUser} onBooleanAge={setBooleanAge} onBooleanCountry={setBooleanCountry} />

    </form>



}









export default NewUser