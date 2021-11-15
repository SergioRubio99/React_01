import React from 'react';
import './PopUp.css'


const PopUp = () => {

    return <div style={{display: "none"}}className="Fade">
        <div className="PopUp">
        <div className="PopUp__up">
            <h1>Invalid Input</h1>
        </div>
        <div className="PopUp__down">
            <span></span>
            <button>Okay</button>
        </div>
    </div>
        </div>

}

export default PopUp;