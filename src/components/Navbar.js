import { useContext } from 'react';
import userContext from '../context/userContext';
import { Link } from 'react-router-dom';

const Navbar = () => {

    let [currentUser, setCurrentUser] = useContext(userContext);

    let logOut = () => {
        setCurrentUser(null);
    }

    let userTab = () => {

        if (currentUser) {
            return <div className='nav-userdetails'>
                user : {currentUser.username}
                <div className="btn" onClick={logOut}>
                    Logout
                </div>
            </div>
        } else {
            return <Link to='/login'>
                Login/Sign Up
            </Link>
        }

    }

    return <div className="navbar">
        <Link to='/'>
            Social Template
        </Link>


        {userTab()}

        <Link to='/newpost'>
            Add new post +
        </Link>

    </div>

}

export default Navbar;