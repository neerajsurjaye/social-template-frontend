import { useEffect } from 'react';
import { useState } from 'react';
import get from '../services/get';
import Post from '../components/Post';
import PageCounter from './PageCounter';
import Search from './Search';
import { BarLoader, CircleLoader, PropagateLoader } from 'react-spinners';

const PostListV2 = (props) => {

    let currPost = props.currPost;

    window.scrollTo(0, 0);


    let genList = () => {
        if (!currPost) {
            return <div>
                Loading
            </div>
        }

        let list = currPost.map((x) => {
            return <Post
                key={x._id}
                post={x}>
            </Post>
        })
        return list;

    }

    if (currPost == null) {
        return <div className="post-list-loading">
            <BarLoader color='#367BF0'></BarLoader>
            {/* <CircleLoader color='#367BF0'></CircleLoader> */}
        </div>
    }

    return <div className="postlist">
        {genList()}
    </div >

}

export default PostListV2;