import React from 'react';
import { useTranslation, } from "react-i18next";
import './PopUp.css';

const PopUp = (props) => {
    const { t } = useTranslation();

    const message = (onBooleanUser, onBooleanAge, onBooleanCountry) => {
        let text = "";

        if(!onBooleanUser){
            text += t('popup.errors.userName');
        }

        if(!onBooleanAge){
            text += t('popup.errors.age');
        }

        if(!onBooleanCountry){
            text += t('popup.errors.country');
        }

        return text;
    };

    return <div  className="Fade">
        <div className="PopUp" style={{height: (!props.onBooleanUser && !props.onBooleanAge && !props.onBooleanCountry) ? "180px" : "auto"}}>
            <div className="PopUp__up">
                <h1>{t('popup.invalidInput')}</h1>
            </div>
            <div className="PopUp__down">
                <span>{message(props.onBooleanUser, props.onBooleanAge, props.onBooleanCountry)}</span>
                <button onClick={() => { document.querySelector(".Fade").style = "display: none;" }}>{t('popup.ok')}</button>
            </div>
        </div>
    </div>
};

export default PopUp;