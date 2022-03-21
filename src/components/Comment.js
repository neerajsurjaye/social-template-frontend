let Comment = (props) => {

    let comment = props.comment;


    if (!comment) {
        <div className="undef">
            undef
        </div>
    }

    return <div className="comment">
        <div className="comment-text">
            {comment.text}
        </div>
        <div className="comment-user">
            {comment.user.username}
        </div>
    </div>

}

export default Comment;