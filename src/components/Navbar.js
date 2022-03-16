import { useContext } from 'react';
import userContext from '../context/userContext';

const Navbar = () => {

    let [currentUser, setCurrentUser] = useContext(userContext);

    let userTab = () => {

        if (currentUser) {
            return <div>
                user : {currentUser.username}
            </div>
        } else {
            return <div>
                Login/Sign Up
            </div>
        }

    }

    return <div className="navbar">
        Social Template


        {userTab()}

    </div>

}

export default Navbar;