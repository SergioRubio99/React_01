import React from 'react';
import { useTranslation, } from "react-i18next";
import './AddButton.css';

const AddButton = () => {
    const { t } = useTranslation();

    return <div>
        <button className="AddButton" type="submit">{t('addButton.addUser')}</button>
    </div>
};

export default AddButton;