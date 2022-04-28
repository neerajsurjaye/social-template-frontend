import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import get from '../services/get';
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";
import GoBack from "./GoBack";
import Nav from "./Nav";
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
        return <div className="post-list-loading">
            <PropagateLoader color='#367BF0'></PropagateLoader>
            {/* <CircleLoader color='#367BF0'></CircleLoader> */}
        </div>
    }

    return <div className="post-page">

        <Nav></Nav>

        <div className="single-post">
            <GoBack></GoBack>
            <Post post={post} single={true}></Post>
            <CommentList id={id}></CommentList>
        </div>
    </div>
}

export default SinglePost;