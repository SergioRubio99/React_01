import './UserItem.css'

const UserItem = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
      };

    console.log(`From UserItem: ${console.log(props)}`)
    return <button onClick={deleteHandler} className="userItem">
        <p className="userParagraph">{props.name}, {props.age} de edad, {props.country}</p>
    </button>
}

export default UserItem;