import './UserItem.css'

const UserItem = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
      };

    return <button onClick={deleteHandler} className="userItem">
        <p className="userParagraph">{props.name}, {props.age} years old, {props.country}</p>
    </button>
}

export default UserItem;