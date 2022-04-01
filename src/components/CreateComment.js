import { useState } from "react";
import post from '../services/post';

let CreateComment = (props) => {

    let [comment, setComment] = useState("");
    let id = props.id;
    let updateComments = props.setComments;

    let updateComment = (e) => {
        setComment(e.target.value);
    }

    let uploadComment = async () => {
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
        <div className="comment-form">

            <label htmlFor="comment-inp">Add Comment</label>
            <textarea type="text" id="comment-inp" className="inp" value={comment} onChange={updateComment} />
            <input type="button" className="primary btn" value='Add comment' onClick={uploadComment}></input>

        </div>
    </div>

}

export default CreateComment;