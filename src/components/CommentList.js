import { useState } from "react";
import { useEffect } from "react";
import get from '../services/get';
import Comment from "./Comment";
import CreateComment from "./CreateComment";

let CommentList = (props) => {

    let id = props.id;

    let [comments, setComments] = useState();

    let fetchComments = async () => {

        if (comments) {
            return;
        }

        let res = await get.getAllComments(id);

        if (res.success) {

            setComments(res.success);

        }
        else {
            console.log("Err : ", res.err);
        }

    }

    let generateList = () => {

        return comments.map((x) => {
            return <Comment key={x._id} comment={x}></Comment>
        })

    }

    useEffect(() => {
        fetchComments();
    }, [comments])

    if (!comments) {
        return <div className="loading">
            Loading
        </div>
    }

    return <div className="commentList">
        <CreateComment setComments={setComments} id={id}></CreateComment>
        {generateList()}
    </div>
}

export default CommentList;