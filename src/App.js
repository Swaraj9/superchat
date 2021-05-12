import './Styles/App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from './Firebase/config';
import Chatroom from './Components/Chatroom';
import Signin from './Components/Signin';
import Navbar from './Components/Navbar';

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Navbar/>
      {user ? <Chatroom/> : <Signin/>}
    </div>
  );
}

export default App;
