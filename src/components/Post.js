

const Post = (props) => {


    let genTags = () => {

        let tags = props.post.tag.map((x) => {
            return <div className="tag-tag" key={x._id}>
                {x.name};
            </div>
        })


        return tags;
    }

    return <div className="post">
        <div className="post-title">
            {props.post.title}
        </div>
        <div className="post-desc">
            {props.post.text}
        </div>
        <li className="tag-list">
            {genTags()}
        </li>
    </div>

}

export default Post;