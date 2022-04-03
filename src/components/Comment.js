import { Link } from "react-router-dom";

let Comment = (props) => {

    let comment = props.comment;


    if (!comment) {
        <div className="undef">
            undef
        </div>
    }

    return <div className="comment">
        <Link to={`/user/${comment.user._id}`} className="comment-user">
            user - {comment.user.username}
        </Link>

        <div className="comment-text">
            {comment.text}
        </div>
    </div>

}

export default Comment;