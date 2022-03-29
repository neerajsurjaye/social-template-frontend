import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import get from '../services/get';
import PageCounter from './PageCounter';
import PostList from './PostList';
import PostListV2 from './PostListV2';
import Search from './Search';

const HomeNav = (props) => {

    let [search, setSearch] = props.search;
    let setSort = props.sort;

    return <div className="home-nav">
        <div className="home-nav-follow">
            <div className="home-nav-card">

                <Search search={[search, setSearch]} setSort={setSort}></Search>

                <Link to='/' className='home-nav-button btn'>
                    Home
                </Link>

                <Link to='/feed' className='home-nav-button btn'>
                    Feed
                </Link>

                <Link to='/newpost' className='home-nav-button btn'>
                    Add new post +
                </Link>

            </div>
        </div>
    </div>
}

const Home = () => {

    let [currPost, setCurrPost] = useState();
    let [search, setSearch] = useState("");
    let [sort, setSort] = useState("new");
    let [page, setPage] = useState(0);
    let [pageCount, setPageCount] = useState(0);


    let updatePosts = async () => {
        let res = await get.post(page, search, sort);
        if (res.success) {
            // console.log(res.success);
            setCurrPost(res.success.posts);
            setPageCount(res.success.count);
        }
    }

    useEffect(() => {
        updatePosts();
    }, [search, sort, page])

    return <div className='home'>

        <HomeNav search={[search, setSearch]} sort={setSort}></HomeNav>

        {/* <PostList></PostList> */}
        <div className="home-post">
            <PostListV2 currPost={currPost}></PostListV2>
            <PageCounter total={pageCount} page={[page, setPage]} ></PageCounter>
        </div>

        <div className="nav">

        </div>

    </div>
}

export default Home;