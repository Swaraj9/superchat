
import {useState} from 'react';
import { auth, firestore } from '../Firebase/config'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import '../Styles/Chatroom.css';
import ChatMessage from './ChatMessage';
import firebase from 'firebase';

const Chatroom = () => {

    const messageRef = firestore.collection('messages');
    const query = messageRef.orderBy("createdAt", "desc").limit(25);

    const [messages] = useCollectionData(query, {idField : 'id'});

    let revMessages = messages;

    if(messages) revMessages = messages.reverse();

    const [input, setInput] = useState('');

    const submitMessage = async(e) => {
        e.preventDefault();


        if(input){
            window.location.assign("#bottom");

            const {uid, photoURL, displayName} = auth.currentUser;

            await messageRef.add({
                text: input,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoURL
            });

            setInput('');

            window.location.assign("#bottom");
        }      
    }

    return (
        <div className = "Chatroom">
            <div className = "chatbox">
                <div className = "chatbox-mid">
                    {revMessages && revMessages.map(msg => <ChatMessage key = {msg.id} text = {msg.text} timeStamp = {msg.createdAt} uid = {msg.uid} name = {msg.displayName}/>)}
                    <div id = "bottom" style = {{height: '0px', width: '0px', visibility: 'none'}}></div>
                </div>
                <form className = "chatbox-footer">
                    <input 
                        className = "chatbox-input" 
                        type = "text" 
                        placeholder = "Enter your message..." 
                        value = {input} 
                        onChange = {(e) => setInput(e.target.value)}
                    />
                    <button className = "chatbox-submit" onClick = {submitMessage}><i className="fas fa-paper-plane fa-2x"></i></button>
                </form>
            </div>
        </div>
    )
}

export default Chatroom
