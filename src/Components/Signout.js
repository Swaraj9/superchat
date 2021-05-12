import {auth} from '../Firebase/config';

const Signout = () => {

    return auth.currentUser && (
        <div className = "Signout">
            <button className = "button-border" onClick = {() => auth.signOut()}>SignOut</button>
        </div>
    );
}

export default Signout
