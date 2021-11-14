import './UserItem.css'

const UserItem = (props) => {
    console.log(`From UserItem: ${console.log(props)}`)
    return <div className = "userItem">
        <p className="userParagraph">{props.name}, {props.age} de edad, {props.country}</p>
    </div>
}

export default UserItem;