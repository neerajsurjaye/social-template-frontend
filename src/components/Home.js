import { useEffect } from 'react';
import get from '../services/get';
import PostList from './PostList';
import Search from './Search';

const Home = () => {

    // const getPost = async () => {
    //     console.log(await get.post());
    // }

    // useEffect(() => {

    //     getPost();

    // }, [])

    return <div>

        <PostList></PostList>

    </div>
}

export default Home;