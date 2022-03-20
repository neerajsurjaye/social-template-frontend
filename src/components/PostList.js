import { useEffect } from 'react';
import { useState } from 'react';
import get from '../services/get';
import Post from '../components/Post';
import PageCounter from './PageCounter';

const PostList = () => {

    let [currPost, setCurrPost] = useState();
    let [pageCount, setPageCount] = useState(0);
    let [page, setPage] = useState(0);

    let getPost = async () => {
        let res = await get.post(page);

        if (res.success) {
            setCurrPost(res.success.posts);
            setPageCount(res.success.count);
        } else {

        }

    }

    let genList = () => {
        if (!currPost) {
            return <div>
                nothing to show
            </div>
        }

        // console.log({ currPost });

        let list = currPost.map((x) => {
            return <Post key={x._id} post={x}>

            </Post>
        })

        return list;

    }

    useEffect(() => {
        getPost();
    }, [page]);

    return <div className="postlist">
        {genList()}

        <PageCounter total={pageCount} page={[page, setPage]}></PageCounter>
    </div>

}

export default PostList;