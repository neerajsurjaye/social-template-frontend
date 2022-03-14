import { useEffect } from 'react';
import get from '../services/get';

const Home = () => {

    const getPost = async () => {
        console.log(await get.post());
    }

    useEffect(() => {

        getPost();

    }, [])

    return <div>
        Home

    </div>
}

export default Home;