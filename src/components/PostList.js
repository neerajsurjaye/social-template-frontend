import { useEffect } from 'react';
import { useState } from 'react';
import get from '../services/get';
import Post from '../components/Post';

const PostList = () => {

    let [currPost, setCurrPost] = useState();

    let getPost = async () => {
        let res = await get.post();

        console.log(res.success);
        if (res.success) {
            setCurrPost(res.success);
        } else {

        }

    }

    let genList = () => {
        if (!currPost) {
            return <div>
                nothing to show
            </div>
        }

        // console.log(currPost);

        let list = currPost.map((x) => {
            return <Post key={x._id} post={x}>

            </Post>
        })

        return list;

    }

    useEffect(() => {
        getPost();
    }, []);

    return <div className="postlist">
        {genList()}
    </div>

}

export default PostList;