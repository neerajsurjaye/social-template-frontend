import { useState } from "react";
import post from "../services/post"


const Post = (props) => {

    let [votes, setVotes] = useState(props.post.votes);

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
            return <div className="tag-tag" key={x._id}>
                {x.name};
            </div>
        })


        return tags;
    }

    // console.log({ props });
    return <div className="post">
        {/* {console.log({ votes })} */}
        <div className="post-title">
            {props.post.title}
        </div>
        <div className="post-desc">
            {props.post.text}
        </div>
        <li className="tag-list">
            {genTags()}
        </li>


        <div className="votes">
            <div className="votes-inc" onClick={() => { updateVotes(1) }}>
                ^
            </div>

            <div className="votes-count">
                {votes}
            </div>

            <div className="votes-dec" onClick={() => { updateVotes(-1) }}>
                V
            </div>
        </div>
    </div>

}

export default Post;