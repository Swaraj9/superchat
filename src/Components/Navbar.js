import '../Styles/Navbar.css';
import Signout from './Signout';

const Navbar = () => {
    return (
        <div className = "Navbar">
            <h2 className = "logo">SuperChat</h2>
            <div className = "signout-container">
                <Signout/>
            </div>
        </div>
    )
}

export default Navbar
