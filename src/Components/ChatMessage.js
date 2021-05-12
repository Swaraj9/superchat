import { auth } from '../Firebase/config';
import '../Styles/ChatMessage.css';

const ChatMessage = ({text, timeStamp, uid, name}) => {

    let time = new Date();

    const user = auth.currentUser;
    const isCurrentUser = user.uid === uid;

    if(timeStamp){
        time = new Date(timeStamp.toDate());       
    }
    
    const date = time.getUTCDate();
    const month = time.getUTCMonth();
    const year = time.getUTCFullYear();
    const hours = time.getUTCHours();
    const minutes = time.getUTCMinutes();
    const seconds = time.getUTCSeconds();

    return (
        <div className = "ChatMessage" style = {{marginLeft : isCurrentUser ? "auto" : "0px", marginRight : isCurrentUser ? "0px" : "auto"}}>
            {!isCurrentUser && <p className = "name">{name}</p>}
            <p className = "text">{text}</p>
            <p className = "time">{`${hours}:${minutes}:${seconds} ${date}-${month}-${year}`}</p>
        </div>
    )
}

export default ChatMessage
