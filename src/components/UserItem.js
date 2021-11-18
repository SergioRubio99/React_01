import './UserItem.css';

const UserItem = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
      };

    return <button onClick={deleteHandler} className="userItem">
        <p className="userParagraph">{t(userItem.description)}</p>
    </button>
};

export default UserItem;
