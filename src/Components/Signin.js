import {auth} from '../Firebase/config';
import firebase from 'firebase';
import '../Styles/Signin.css';

const Signin = () => {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div className = "Signin">
            <button className = "button-border" onClick = {signInWithGoogle}>Sign in with Google</button>    
        </div>
    )
}

export default Signin
