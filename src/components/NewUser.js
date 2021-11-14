import React from 'react';
import AddButton from './UI/AddButton'
import './NewUser.css'

const NewUser = () => {


    return <form class="form">

        <div class="form__div">
            <label type="text">Username</label>
            <input></input>
        </div>
        <div class="form__div">
            <label type="text">Age (Years)</label>
            <input></input>
        </div>

        <AddButton />

    </form>



}









export default NewUser