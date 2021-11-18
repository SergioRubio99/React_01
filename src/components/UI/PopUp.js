import React from 'react';
import { useTranslation, } from "react-i18next";
import './PopUp.css';

const PopUp = (props) => {
    const { t } = useTranslation();

    return <div  className="Fade">
        <div className="PopUp" style={{height: "auto"}}>
            <div className="PopUp__up">
                <h1>{t('popup.invalidInput')}</h1>
            </div>
            <div className="PopUp__down">

                <div>
                {props.messages.map(function(message, index){
                    return <div key={ index }>{message}</div>;
                })}
                </div>

                <button onClick={() => { document.querySelector(".Fade").style = "display: none;" }}>{t('popup.ok')}</button>
            </div>
        </div>
    </div>
};

export default PopUp;
