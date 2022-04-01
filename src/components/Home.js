import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import get from '../services/get';
import PageCounter from './PageCounter';
import PostList from './PostList';
import PostListV2 from './PostListV2';
import Search from './Search';
import SortBar from './SortBar';
import Nav from './Nav';

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
        setCurrPost(null);
        updatePosts();
    }, [search, sort, page])

    return <div className='home'>

        <Nav search={[search, setSearch]} ></Nav>

        {/* <PostList></PostList> */}
        <div className="home-post">
            <SortBar sort={setSort}></SortBar>
            <PostListV2 currPost={currPost}></PostListV2>
            <PageCounter total={pageCount} page={[page, setPage]} ></PageCounter>
        </div>

        <div className="nav">

        </div>

    </div>
}

export default Home;