import { useEffect } from 'react';
import { useState } from 'react';
import './assets/index.css';
import './components/Home';
// import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import get from './services/get';
import userContext from './context/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import SinglePost from './components/SinglePost';
import Home from './components/Home';
import User from './components/User';
import Feed from './components/Feed';
import SingleTag from './components/SingleTag';
import Footer from './components/Footer';

function App() {

    let [currentUser, setCurentUser] = useState(null);
    let [isLogin, setIsLogin] = useState(false);



    //fetches current user
    let getCurrentUser = async () => {

        let token = localStorage.getItem('Auth');

        if (token == '') {
            setIsLogin(false);
        } else {
            let res = await get.currentUser(token);

            if (res.success) {
                // console.log(res.success);
                setCurentUser(res.success);
                setIsLogin(true);
            } else {
                setIsLogin(false);
                setCurentUser(null);
            }

        }

    }

    useEffect(() => {
        getCurrentUser();
    }, [])


    return (
        <Router>
            <userContext.Provider value={[currentUser, setCurentUser]}>

                <Navbar />
                <div className="main">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/newpost' element={<PostForm />} />
                        <Route path='/post/:id' element={<SinglePost />} />
                        <Route path='/user/:id' element={<User />} />
                        <Route path='/feed' element={<Feed />} />
                        <Route path='/tag/:id' element={<SingleTag />} />
                    </Routes>
                </div>

                <Footer></Footer>

            </userContext.Provider>
        </Router >
    );
}

export default App;
