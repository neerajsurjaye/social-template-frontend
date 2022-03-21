import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import get from '../services/get';
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";
import Post from './Post';

let SinglePost = () => {

    let { id } = useParams();
    let [post, setPost] = useState();

    let getPost = async () => {

        let res = await get.getPostById(id);

        if (res.success) {
            setPost(res.success);
        }

    }

    useEffect(() => {
        getPost();
    }, []);


    if (!post) {
        return <div className="loading">
            Loading
        </div>
    }

    return <div className="singlepost">
        <Post post={post}></Post>
        <CommentList id={id}></CommentList>
    </div>
}

export default SinglePost;