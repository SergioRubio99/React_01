import React from 'react';
import './PopUp.css'


const PopUp = (props) => {


    return <div  className="Fade">
        <div className="PopUp" style={{height: (!props.onBooleanUser && !props.onBooleanAge && !props.onBooleanCountry) ? "180px" : "auto"}}>
            <div className="PopUp__up">
                <h1>Invalid Input</h1>
            </div>
            <div className="PopUp__down">

                {(!props.onBooleanUser && props.onBooleanAge && props.onBooleanCountry) ? <span> The username must follow this format: 'Example' in order to be correct </span> : ``}
                {(!props.onBooleanAge && props.onBooleanUser && props.onBooleanCountry) ? <span> The age must be set between 18 and 119. </span> : ``}
                {(!props.onBooleanCountry && props.onBooleanUser && props.onBooleanAge) ? <span> The country must be set in one of the following formats: 'Spain', 'The United States' or "People's Republic of China". </span> : ``}
                {(!props.onBooleanUser && !props.onBooleanAge && props.onBooleanCountry) ? <span> The username must follow this format: 'Example' in order to be correct. The age must be set between 18 and 119. </span> : ``}
                {(!props.onBooleanCountry && !props.onBooleanAge && props.onBooleanUser) ? <span> The country must be set in one of the following formats: 'Spain', 'The United States' or "People's Republic of China", and the age must be set between 18 and 119. </span> : ``}
                {(!props.onBooleanCountry && !props.onBooleanUser && props.onBooleanAge) ? <span> The country must be set in one of the following formats: 'Spain', 'The United States' or "People's Republic of China", and the username must follow this format: 'Example'. </span> : ``}
                {(!props.onBooleanCountry && !props.onBooleanUser && !props.onBooleanAge) ? <span> The country must be set in one of the following formats: 'Spain', 'The United States' or "People's Republic of China", and the username must follow this format: 'Example'. The age must be set between 18 and 119 </span> : ``}
                <button onClick={() => { document.querySelector(".Fade").style = "display: none;" }}>Okay</button>
            </div>
        </div>
    </div>

}

export default PopUp;