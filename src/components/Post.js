import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import post from "../services/post";
import userContext from "../context/userContext";
import httpDelete from "../services/httpDelete";
import { FaArrowUp, FaArrowDown, FaCommentAlt } from 'react-icons/fa';


const Post = (props) => {

    // console.log("Post", props.post, props.post);
    let [votes, setVotes] = useState(props?.post?.votes);
    let user = props?.post?.user;
    let userCont = useContext(userContext)[0];
    let count = props?.post?.comments?.length;
    count = count ? count : -1;
    // console.log(props.post);

    let updateVotes = async (c) => {

        let id = props.post._id;
        let dec = c === 1 ? false : true;
        let token = localStorage.getItem('Auth');

        // console.log({ dec });
        let res = await post.updateVotes(id, dec, token);

        if (res.success) {
            setVotes(res.success.votes);
        }

    }

    let genTags = () => {


        let tags = props.post.tag.map((x) => {
            return <Link className="tag-tag" key={x._id} to={`/tag/${x._id}`} >
                {x.name}
            </Link >
        })


        return tags;
    }

    if (!props.post) {
        return <div className="post">
            Undef
        </div>
    }



    let canDeletePost = () => {
        if (props.post.user._id == userCont?._id) {
            return <div
                className="delete-post btn"
                onClick={async () => {
                    //delete post
                    let token = localStorage.getItem('Auth');
                    // console.log(props.post._id);
                    console.log(await httpDelete.detelePost(props.post._id, token));
                }}>
                Delete
            </div>
        }

    }

    // console.log({ props });
    return <div className="post" >

        <Link className="post-user" to={`/user/${user._id}`}>
            user - {user.username}
        </Link>

        <Link to={`/post/${props.post._id}`} className='post-main'>
            < div className="post-title" >
                {props.post.title}
            </div >
            <div className="post-desc">
                {props.post.text}
            </div>
            <li className="tag-list">
                {genTags()}
            </li>
        </Link>

        {/* {canDeletePost()} */}

        <div className="post-bottom">
            <div className="votes">
                <div className="votes-btn btn" onClick={() => { updateVotes(1) }}>
                    <FaArrowUp></FaArrowUp>
                </div>

                <div className="votes-count">
                    {votes}
                </div>

                <div className="votes-btn btn" onClick={() => { updateVotes(-1) }}>
                    <FaArrowDown></FaArrowDown>
                </div>
            </div>
        </div>

    </div >

}

export default Post;