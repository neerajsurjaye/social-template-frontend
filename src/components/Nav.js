import { Link } from 'react-router-dom';
import Search from './Search';

import { AiFillFilter, AiFillHome } from 'react-icons/ai';
import { IoIosAddCircle } from 'react-icons/io';
import { BsFillSignpostSplitFill } from 'react-icons/bs';

const Nav = (props) => {

    let search = null;
    let setSearch = null;
    if (props.search) {
        // [search, setSearch] = props.search;
        search = props.search[0];
        setSearch = props.search[1];
    }


    console.log(search);

    return <div className="home-nav">
        <div className="home-nav-follow">
            <div className="home-nav-card">

                {props.search ? <Search search={[search, setSearch]} ></Search> : <></>}


                <Link to='/' className='home-nav-button btn'>
                    <AiFillHome className='home-nav-icon'></AiFillHome> Home
                </Link>

                <Link to='/feed' className='home-nav-button btn'>
                    <AiFillFilter className='home-nav-icon'></AiFillFilter> Feed
                </Link>

                <Link to='/recommended' className='home-nav-button btn'>
                    <BsFillSignpostSplitFill className='home-nav-icon'></BsFillSignpostSplitFill> Recommended
                </Link>

                <Link to='/newpost' className='home-nav-button btn'>
                    <IoIosAddCircle className='home-nav-icon'></IoIosAddCircle > Add new post +
                </Link>

            </div>
        </div>
    </div>
}

export default Nav;