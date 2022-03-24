import { useEffect } from 'react';
import { useState } from 'react';
import get from '../services/get';
import Post from '../components/Post';
import PageCounter from './PageCounter';
import Search from './Search';

const PostListV2 = (props) => {

    let currPost = props.currPost;

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



    return <div className="postlist">
        {genList()}
    </div >

}

export default PostListV2;