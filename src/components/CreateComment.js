import { useState } from "react";
import post from '../services/post';

let CreateComment = (props) => {

    let [comment, setComment] = useState();
    let id = props.id;
    let updateComments = props.setComments;

    let updateComment = (e) => {
        setComment(e.target.value);
    }

    let uploadComment = async (e) => {
        e.preventDefault();

        if (!comment || comment.length == 0) {
            return;
        }

        let token = localStorage.getItem('Auth');

        let res = await post.uploadComment(id, comment, token);

        if (res.success) {
            console.log("Success ", res.success);
            updateComments(null);
        }
        else {
            console.log("err : ", res.err);
        }

    }

    return <div className="create-comment">
        <form className="comment-form">

            <label htmlFor="comment-inp" className="heading">Add Comment</label>
            <textarea type="text" id="comment-inp" className="inp" value={comment} placeholder="Add a new comment" onChange={updateComment} />
            <input type="submit" className="primary btn" value='Add comment' onClick={uploadComment}></input>

        </form>
    </div >

}

export default CreateComment;