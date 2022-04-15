import { useContext } from 'react';
import userContext from '../context/userContext';
import { Link } from 'react-router-dom';

const Navbar = () => {

    let [currentUser, setCurrentUser] = useContext(userContext);

    let logOut = () => {
        setCurrentUser(null);
        localStorage.setItem('Auth', null);
    }

    let userTab = () => {

        // console.log({ currentUser });

        if (currentUser) {
            return <div className='nav-details'>
                <Link to={`user/${currentUser._id}`} className="nav-user">
                    user : {currentUser.username}
                </Link>
                <div className="btn warn" onClick={logOut}>
                    Logout
                </div>
            </div>
        } else {
            return <div className="nav-details">
                <Link className='btn primary' to='/login'>
                    Login/Sign Up
                </Link>
            </div>
        }

    }

    return <div className="navbar">
        <Link to='/'>
            Social Template
        </Link>


        {userTab()}
    </div>

}

export default Navbar;