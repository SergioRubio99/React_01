import './UserItem.css';
import { useTranslation, } from "react-i18next";

const UserItem = (props) => {
    const { t } = useTranslation();

    const deleteHandler = () => {
        props.onDelete(props.id);
      };

    return <button onClick={deleteHandler} className="userItem">
        <p className="userParagraph">{t('userItem.description', { name: props.name, age: props.age, country: props.country, })}</p>
    </button>
};

export default UserItem;
